# as-esp

## Step 1: 

```npm install ```



## Step 2: 
Build esp-catcher on your local machine. change cloudslayer to your docker hub name.

```cd endpoint ```

```docker build . -t cloudslayer/esp-catcher```



## Step 3:
 Go back to root folder. 
```cd .. ```

```docker compose up```



## Step 4:
 Pass in Data
```node write.js```
