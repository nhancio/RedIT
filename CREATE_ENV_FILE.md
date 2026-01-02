# Create .env File - URGENT

Your `.env` file is missing! This is why you're seeing "EmailJS is not configured" error.

## Quick Fix

**Create a file named `.env` in your project root** (`/Users/nithi/Desktop/RedIT/.env`) with this exact content:

```env
VITE_EMAILJS_PUBLIC_KEY=BpSpEbJh6niVNOLIN
VITE_EMAILJS_SERVICE_ID=service_kqpjk5r
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_qp2k9iv
VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID=template_whkvyi2
```

## Steps to Create:

### Option 1: Using Terminal
```bash
cd /Users/nithi/Desktop/RedIT
cat > .env << 'EOF'
VITE_EMAILJS_PUBLIC_KEY=BpSpEbJh6niVNOLIN
VITE_EMAILJS_SERVICE_ID=service_kqpjk5r
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_qp2k9iv
VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID=template_whkvyi2
EOF
```

### Option 2: Using VS Code / Cursor
1. In your editor, create a new file
2. Name it exactly `.env` (with the dot at the beginning)
3. Paste the content above
4. Save the file

### Option 3: Using Finder (Mac)
1. Open Finder
2. Navigate to `/Users/nithi/Desktop/RedIT/`
3. Press `Cmd + Shift + .` to show hidden files
4. Create a new file named `.env`
5. Open it in a text editor and paste the content

## After Creating .env File:

**IMPORTANT:** Restart your dev server:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

The environment variables are only loaded when the dev server starts, so you MUST restart it after creating the .env file.

## Verify It's Working:

After restarting, try submitting the enrollment form again. The error should be gone and emails should send successfully!

