module.exports = {
  apps: [
    {
      name: "public", // ubah sesuai nama aplikasi yang dibuat
      script: "npx",
      // ubah 3000 sesuai port yg dipakai di .htaccess
      args: "next start", 
      interpreter: "none",
      watch: true,
      merge_logs: true,
      env: {
        "NODE_ENV": "production",
      }
    }
  ]
}