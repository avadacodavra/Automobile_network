To run the container use the following command 

This works if your are in the same folder and the name of the file docker-compose.yaml
```
docker compose up -d

```
-d stands for detached mode

If you are having a different name use the following command
```
docker compose -f [path/to/compose/file] up -d

```
This command is used to validate the docker file
```
docker compose config

```

To view the couchdb container go to this url http://localhost:3000/_utils

**Volume Mapping**

To access the sample folder execute this command
```
sudo chmod -R 777 samplefolder

```

Enter this command to list out all the containers
```
docker ps -a

```
-a for showing terminated containers also.

**Copy the container ID from the bash image** 

Execute this command to open a bash shell inside the container
```
docker exec -it <container ID> bash

```

TO check the files inside the container execute this command
```
ls /hyperledger/fabric/newfolder

```

To create a new file using the cat command
```
cat /hyperledger/fabric/newfolder/<file_name>

```

**Cleanup**

To bring down the containers which were up using docker-compose files use the following command
```
docker compose down

```

To remove the containers use the following commands
```
docker container prune

docker system prune

docker volume prune

docker network prune

```

To remove a particular image use this command
```
docker rmi <image_id_or_name:tag>

```
