import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;
  app.use(express.json({ limit: '50mb' }));

  // Endpoint to save files directly into /data
  app.post('/api/upload-to-workspace', async (req, res) => {
    try {
      const { filename, contentBase64 } = req.body;
      if (!filename || !contentBase64) {
        return res.status(400).json({ error: 'Missing filename or content' });
      }
      const safeFilename = path.basename(filename);
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, safeFilename);
      const buffer = Buffer.from(contentBase64, 'base64');
      await fs.promises.writeFile(filePath, buffer);
      return res.json({
        success: true,
        filename: safeFilename,
        path: `/data/${safeFilename}`,
        size: buffer.length,
      });
    } catch (err: any) {
      console.error('Error saving file:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Endpoint to list files in /data
  app.get('/api/workspace-data-files', async (req, res) => {
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        return res.json({ files: [] });
      }
      const files = await fs.promises.readdir(dataDir);
      const fileStats = await Promise.all(
        files.map(async (name) => {
          const stats = await fs.promises.stat(path.join(dataDir, name));
          return { name, size: stats.size, modifiedTime: stats.mtime };
        })
      );
      return res.json({ files: fileStats });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
