<h1>Hard Roll Back Batch file</h1>
<h2>RollBack.cmd</h2>

A batch file to hard roll back to a particular commit on git hub, this will delete anything commited after only use as a last resort

rem first variable is the project name, second variable is the link to the repo, 3rd variable hash of the commit to roll back to

example on how to run the file

<code>RollBack.cmd sandbox "https://github.com/chrisnft/sandbox.git" 55103a35583afc375ec67202f4f7dffa1023d6d6 >> Rollback.log</code>

<h2>RollBackBranch.cmd</h2>

<code>RollBackBranch.cmd sandbox "https://github.com/chrisnft/sandbox.git" af783e8ef31f5cad961e0f7c329387939541b54b C++_Main >> Rollback.log</code>
