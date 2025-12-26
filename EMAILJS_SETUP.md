# EmailJS Setup Guide

This guide will help you set up EmailJS to handle form submissions from your website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com)
2. Click **Sign Up** (or **Log In** if you already have an account)
3. Create a free account (allows 200 emails/month)

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for Gmail accounts)
   - **Outlook** (for Outlook/Hotmail)
   - **Custom SMTP** (for other providers)
4. Follow the setup instructions for your chosen provider
5. Give your service a name (e.g., "RedDot IT Training")
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Templates

You need to create **2 templates** - one for Contact Form and one for Enrollment Form.

### Template 1: Contact Form Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it: **"Contact Form"**
4. Set up the template:

**Template Settings:**
- **To Email**: Your email address (e.g., `info@reddotit.com`)
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{from_email}}`
- **Subject**: `New Contact Form Submission - {{from_name}}`

**Email Body** (HTML):
```html
<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from the RedDot IT Training website contact form.</small></p>
```

**Or Plain Text Version:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the RedDot IT Training website contact form.
```

5. Click **Save**
6. **Copy the Template ID** - you'll need this later

### Template 2: Enrollment Form Template

1. Click **Create New Template** again
2. Name it: **"Enrollment Form"**
3. Set up the template:

**Template Settings:**
- **To Email**: Your enrollment email (e.g., `enrollments@reddotit.com`)
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Reply To**: `{{from_email}}`
- **Subject**: `New Course Enrollment - {{course}} - {{from_name}}`

**Email Body** (HTML):
```html
<h2>New Course Enrollment Request</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Course:</strong> {{course}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from the RedDot IT Training website enrollment form.</small></p>
```

**Or Plain Text Version:**
```
New Course Enrollment Request

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Course: {{course}}

Message:
{{message}}

---
This email was sent from the RedDot IT Training website enrollment form.
```

4. Click **Save**
5. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find **Public Key** section
3. **Copy your Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. In your project root, create a `.env` file (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID=your_enrollment_template_id_here
```

3. Replace the placeholder values with your actual IDs:
   - `your_public_key_here` → Your Public Key from Step 4
   - `your_service_id_here` → Your Service ID from Step 2
   - `your_contact_template_id_here` → Contact Form Template ID from Step 3
   - `your_enrollment_template_id_here` → Enrollment Form Template ID from Step 3

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_contact456
VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID=template_enroll789
```

## Step 6: Restart Your Dev Server

After adding environment variables, restart your development server:

```bash
npm run dev
```

## Step 7: Test Your Forms

1. **Test Contact Form:**
   - Fill out the contact form on your website
   - Verify phone number with OTP
   - Submit the form
   - Check your email inbox

2. **Test Enrollment Form:**
   - Click "Enroll Now" on any course
   - Fill out the enrollment form
   - Verify phone number with OTP
   - Submit the form
   - Check your email inbox

## Template Variables Reference

### Contact Form Variables:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{message}}` - User's message

### Enrollment Form Variables:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{course}}` - Course name
- `{{message}}` - User's message

## Troubleshooting

### Emails not being received
- Check your spam/junk folder
- Verify all environment variables are correct
- Check EmailJS dashboard for error logs
- Make sure your email service is properly connected
- Verify template IDs match your templates

### "EmailJS is not configured" error
- Make sure `.env` file exists in project root
- Verify all environment variables are set
- Restart your dev server after adding variables
- Check that variable names start with `VITE_`

### CORS errors
- EmailJS handles CORS automatically
- If you see CORS errors, check browser console for specific issues
- Make sure you're using the correct Public Key

### Template variables not working
- Make sure variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`
- Check EmailJS dashboard template preview

## Free Plan Limits

- **200 emails/month** on the free plan
- Upgrade to paid plans for more emails
- Check your usage in the EmailJS dashboard

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Public Key is safe to expose (it's meant to be public)
- Service ID and Template IDs are also safe to expose
- EmailJS handles security on their end

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/support/)

