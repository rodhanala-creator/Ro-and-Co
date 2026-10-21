# Upload Ro & Co to GitHub

1. Extract `ro-and-co-github.zip` on your computer. Upload the extracted contents, not the ZIP itself.
2. Create a private GitHub repository named `ro-and-co`. Leave the options to add a README, .gitignore, and license unchecked; the package supplies the first two.
3. On the empty repository page, choose the link to upload an existing file. Drag all extracted files and folders into the uploader, including `.gitignore`.
4. Commit the files with the message `Initial Ro & Co website`.
5. Confirm `package.json`, `package-lock.json`, `app`, `components`, and `lib` appear directly at the repository root, without an extra enclosing folder.
6. In Vercel, import this GitHub repository. Use the Next.js preset, repository root, Node.js 24, install command `npm ci`, and build command `npm run build`. Keep the default output directory. No environment variables are required.
7. Review the hosted site before connecting the domain. Follow `docs/deployment.md` for domain setup and launch checks.

The configured domain is `https://theroandco.com`; the brand is Ro & Co. The Email us button retains the approved email destination. Search indexing is still disabled until the launch review is complete.

The archive contains source, configuration, the dependency lockfile, verification script, and documentation. Dependencies, build output, Git history, local environment files, and hosting credentials are excluded. Run `npm ci` after extracting if you want to develop locally.

Earlier milestone screenshots and notes document historical designs and names; they are not served as website content.
