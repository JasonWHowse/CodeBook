rem first variable is the project name, second variable is the link to the repo, 3rd variable hash of the commit to roll back to, 4th variable Branch to roll back
mkdir gitRollbkdir
cd gitRollbkdir
git clone %2
cd %1
git reset --hard %3
git push -f origin %4
cd..
cd..
rmdir /s /q gitRollbkdir
