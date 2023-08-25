This is repredution example for the call navigation.navigate at once with new acrh casue crash

# Getting Started

## Step 1: Update node_modules

```bash
enter main entry and call yarn 
```

## Step 2: Update Pods with the new archtecture
there is script in the package json called pod-install (it update pod with thew new arch)

```bash
yarn pod-install
```

## Step 3: Run App and repreduce the bug number 1 (calling 2 times navigation.navigate) 

1.  run app from xcode
2. click on move to App button that need to lead you to app main page (screen 1)
3. then click on move to screen 2  that lead you to screen 2
4. then click on go screen 3 and 4 that do the double navigation method that need to cause the crash

 
## Step 4: repreduce the bug number 2 (moving 2 screen at once with CommonActions.reset)  

1. click on move to App button that need to lead you to app main page (screen 1)
2. then click on move to screen 2  that lead you to screen 2
3. then click on "go screen 3 and 4 with RESET option" that do the double navigation method that need to cause the crash

