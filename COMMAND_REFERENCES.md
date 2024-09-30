
#### GIT

##### REVERT
To revert a commit and bring the changes done back to stage area.

```
git reset --soft HEAD~<hom many commits>
git reset --soft HEAD~1
```

##### CREATE
To create a new branch:
```
git checkout -b <branch-name>
Example: 
git checkout -b feature/kan-15-dashboaord 
```
#### Git Config
##### set/unset remote and merge configuration for a branch

To get and fix the warning if your main branch has multiple values set for its remote and merge configuration. 
```
git config --get-all branch.<branch-name>.remote
git config --get-all branch.<branch-name>.merge

git config --unset-all branch.<branch-name>.remote
git config --unset-all branch.<branch-name>.merge

Example:
git config --get-all branch.main.remote
git config --get-all branch.main.merge

git config --unset-all branch.main.remote
git config --unset-all branch.main.merge
```

#### Set Remote


If you run just 
```
git branch --set-upstream-to=origin/
```
it will throw an error because it expects a branch name from the remote (origin). 
You need to specify the remote branch that you want to set as the upstream.

```
git branch --set-upstream-to=origin/main
```


###### What is origin?

In Git, origin is the default name given to the remote repository when you clone a project. 

######  What is a remote repository? 
A remote repository is a version of your project that's hosted on a server, usually on a platform like GitHub, GitLab, or Bitbucket.


Other Commands: (Use ChatGPT to read more) 
```
```
