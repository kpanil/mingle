# mingle
Let's mingle

1. Fork this repository (github)

2. clone your remote repository to your local working directory by,

   mkdir -p mingle/master
   cd mingle/master

   git clone https://github.com/${yourname}/mingle.git src

3. create a new branch for your changes

   git branch my-feature-branch
   git checkout my-feature-branch 

   commit to this working branch as you work on this specific feature

   git add <change/new files>

   git commit -m "comment here"

4. Rebase user working branch against latest master. Other contributors may have commited changes which can conflict with yours.
   Resolve this before pushing your changes to your forked area.

    git rebase master

5. use git push to publish your changes to your remote repository

   git push -u origin my-feature-branch

6. Goto github and place a pull request for your changes to be reviewed/approved and merged to the central repository


 How to sync your forked repo with central
 ----------------------------------------

  git remote add upstream https://github.com/kpanil/mingle.git

  git fetch upstream
  
  git checkout master
  git rebase upstream/master

  git push -u origin master

  git checkout working-branch
  git rebase master

 Basic git setup
 ---------------

 # editor to be used with git commit

 git config --global core.editor "vim" // or your favorite editor. you can also do it by exporting GIT_EDITOR

 # Let git know your identity with github

 git config --global user.email "you@email.com"
 git config --global user.name  "your name"

 # Some useful shortcuts

 git config --global alias.co checkout
 git config --global alias.br branch
 git config --global alias.ci commit
 git config --global alias.st status

