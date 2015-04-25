---
layout: post
category : Deep Learning
title: Thoughts after Andrew's talk at Nvidia
---
Today I watch the [talk](http://www.ustream.tv/recorded/60113824) Andrew Ng gave at GPU Technology Conference.

The important screenshots are:
![magic screenshots]({{ site.url }}/assets/Screenshot2015-04-1910.48.32.png)
The migrate from cloud computing to HPC is because the synchronizability between computation or the Goal HPC do computation. The main difference between cloud computing and HPC is in cloud computing it tolerate the fault nodes in computation,
and just start another node once some nodes in the cloud fails, this might suitable for some internet services like hosting the websites, but for computing the neural network, it is most of the time matrix computation and really needs every core is on the same page most of the time compared to the cloud's asynchronous communication in the most of the time.
![magic screenshots]({{ site.url }}/assets/Screenshot 2015-04-19 10.50.18.png)

Obviously more GPU will do faster job but where is the sweetspot for the cost of GPUS as well as the cost of Time?
<!--break-->
![magic screenshots]({{ site.url }}/assets/Screenshot 2015-04-19 10.55.36.png)
![magic screenshots]({{ site.url }}/assets/Screenshot 2015-04-19 11.55.29.png)
I always believe the best way to learn is by doing it and think carefully what's happening during the experiments.And find the best resource we could have to explain and solve the problem.In machine learning term is supervised learning for human, we should always try to get the feedback for what we've done, and try to talk to people and refer to technology in books and papers that can solve our current problems.
<!--break-->
![magic screenshots]({{ site.url }}/assets/Screenshot 2015-04-19 11.31.55.png)
![magic screenshots]({{ site.url }}/assets/Screenshot 2015-04-19 11.54.47.png)
The new promising deep speech structure: a BDRNN. Help neural network's each recognizing unit better capture what is before and after itself.BTW I should remind myself here BDRNN is the one I should learn during this summer.
