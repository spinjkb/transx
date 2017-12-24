  
#lsof -i :8081|grep node| awk '{print $2}'|uniq |xargs kill
#ps -ef|grep 'MacOS/Terminal'|awk '{print $2}'|uniq|xargs kill  -9

react-native run-android
