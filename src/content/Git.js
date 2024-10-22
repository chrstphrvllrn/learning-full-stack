import React from 'react'
import CodeBlock from '../components/CodeBlock'
function Git() {
    return (
        <div>
            <h1>Each repo should have separate deploy keys, do not override the existing id_ed25519.pub</h1>
            <CodeBlock></CodeBlock>
            <h1>. If you have multiple SSH keys, Git might be using the wrong key. You can check which key Git is using with:

</h1>
        <CodeBlock>ssh -T git@github.com</CodeBlock>
        <p>If you want Git to use a specific key, you can set up an SSH config file (~/.ssh/config) to ensure it uses the correct one for the repository.</p>
            https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
            <h1 className='text-xl'>How to push the update</h1>
            <CodeBlock language='command-line'>{`How to push the update to github
Git add .
git commit -m "Add existing file"
git push origin main`}</CodeBlock>
            <h1 className='text-xl'>How to get the updated file</h1>
            <CodeBlock language='command-line'>{`Git pull git@github.com:chrstphrvllrn/ChristopherVillarin.git`}</CodeBlock>
            <h1 className='text-xl'>From 2021-08-13, GitHub is no longer accepting account passwords when authenticating Git operations. You need to add a PAT (Personal Access Token) instead, and you can follow the below method to add a PAT on your system.
            </h1>
            <p>https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed</p>
            <p>And use the generated token as a password</p>
            <p>Provide a username and the generated token as a password</p>
            <CodeBlock language='command-line'>{`Username for 'https://github.com/chrstphrvllrn/': you@gmail.com
Password for 'https://github.com/chrstphrvllrn/Learning/': generated token here`}</CodeBlock>
            <h1 className='text-xl'>Checking for existing SSH keys</h1>
            <p>https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys</p>
            <p>generate new key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent</p>
            <p>1. Open Terminal.</p>
            <p>cd ~/.ssh </p>
            <p>2. Enter ls -al ~/.ssh to see if existing SSH keys are present.</p>
            <p>ssh-keygen -t ed25519 -C "your_email@example.com"</p>
            <p>do not override</p>
            <p>cat id_ed25519.pub</p>
            <p>copy the result and go to repository/Settings/Deploy keys/Add deploy keys</p>
            <p>paste the copied value, and check the allow edit acess</p>
            <p> now you can push to the repository</p>
            <CodeBlock language='command-line'>{`$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist`}</CodeBlock>
            <p>Check the directory listing to see if you already have a public SSH key. By default, the filenames of supported public keys for GitHub are one of the following.
                <li>id_rsa.pub</li>
                <li>id_ecdsa.pub</li>
                <li>id_ed25519.pub</li>
                Tip: If you receive an error that ~/.ssh doesn't exist, you do not have an existing SSH key pair in the default location. You can create a new SSH key pair in the next step.
            </p>
            <p>Either generate a new SSH key or upload an existing key.</p>
            <p>https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent</p>
            <h1>How to remove a Git from a project?</h1>
            <CodeBlock>rm -rf .git*</CodeBlock>
            source: https://www.scaler.com/topics/git/remove-git-from-project/
            <h1>To see the status</h1>
            <p>git status</p>
            <h1>Adding the project to the existing empty repository</h1>
            <CodeBlock>git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git</CodeBlock>
            <p>Verify that the remote URL was added with your new repository name. </p>
            <CodeBlock>git remote -v</CodeBlock>
            now you can proceed with the git add. && git commit -m 'message' %% git push origin main    
            <h1>Usual GitIgnore</h1>
            <CodeBlock>{`# Node.js dependencies
node_modules/

# Build output
dist/
build/

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime files
.pids
*.pid
*.seed
*.pid.lock

# Environment files
.env
.env.local

# macOS
.DS_Store

# Windows
Thumbs.db

# Editor settings
.vscode/
.idea/
`}</CodeBlock>
<h1>You're still encountering the non-fast-forward error because your local branch is behind the remote branch. This typically happens when there are changes on the remote branch that you haven't pulled down yet.</h1>
<CodeBlock>{`git pull origin main`}</CodeBlock>
<CodeBlock>{`git add .`}</CodeBlock>
<CodeBlock>{`git commit -m "Merge remote changes"`}</CodeBlock>
<CodeBlock>{`git push origin main`}</CodeBlock>
alternative: Force Push (Not Recommended)
<CodeBlock>{`git push --force origin main`}</CodeBlock>




        </div>
    )
}
export default Git