// backend/server.js

import app from "./index.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ LINE webhook server running on http://localhost:${PORT}`);
});
