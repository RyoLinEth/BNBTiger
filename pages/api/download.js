const path = require('path');
const fs = require('fs');

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'files', 'Whitepaper.pdf');
    const fileStream = fs.createReadStream(filePath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=BNBTiger_Whitepaper.pdf');

    fileStream.pipe(res);
}