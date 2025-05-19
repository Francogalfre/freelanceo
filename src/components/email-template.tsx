export function EmailTemplate({ url }: { url: string }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Reset Password</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f6f9fc;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f6f9fc; padding: 20px 0;">
      <tr>
        <td align="center">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="400" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 30px;">
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                <h1 style="margin: 0; color: #333333;">Reset Your Password</h1>
              </td>
            </tr>
            <tr>
              <td style="color: #555555; font-size: 16px; line-height: 1.5; padding-bottom: 30px;">
                You recently requested to reset your password. Click the button below to proceed. If you did not request this, please ignore this email.
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom: 30px;">
                <a href="${url}" target="_blank" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block;">
                  Reset Password
                </a>
              </td>
            </tr>
            <tr>
              <td style="color: #999999; font-size: 14px; line-height: 1.4;">
                If the button doesn’t work, copy and paste this link into your browser:
                <br />
                <a href="${url}" target="_blank" style="color: #2563eb; word-break: break-all;">
                  ${url}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 30px; font-size: 12px; color: #cccccc; text-align: center;">
                &copy; 2025 Freelanceo - Franco Galfre. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
