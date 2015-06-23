---
layout: post
category : Deep Learning
title: Classify scenes in real time
---
Here is a summary for the recent work I've done with my colleague at GTRI. The work is based on the work in papers section.The basic idea is let computer categorize the scenes given a short time of video, say 20 secs.What we did is actually transforming the research results into real time application.  You can find a demo at [here](https://www.youtube.com/watch?v=8T4bQEcqgIQ). It's still pretty primitive if you see outfit we have to wear for this. The most important part is we have to use fast cpu and GPU to run through caffe to get the outputMaps for the frames we capture and then calculate the fisher vector for the current segments(20 secs video) and calculate the distance between the fisher vector for the current segments and fisher vectors we have in our database in real time. To this end, other wearable devices can't get the job done because the limitation of the their GPU and compatibility issue with caffe. 

I've seen someone port caffe on android devices on Github using JNI, but it's running on CPU. I've tried one of it's application to classify to objects from Nexus 6's camera, it took around 10 secs to finish the whole process given it's not optimized code. It's not bad but I have to admit the hardware is still a drawback for deep learning application to run on mobile devices. Maybe currently we have to depend on uploading videos to servers to process but that gonna take a lot of time transferring data plus it's not friendly to people with limited data plan. 

I still remember the hardest time when me and Robert sitting together debugging the caffe code for this project, it was like not making progress at all.But finally we persisted and came through all the problems thanks to our great collaboration and communication as well as helps from Dr.Wagner and Dr.Kira. I feels I've learned a lot from this working experience: getting better understanding in coding in c/c++ and python, working collaboratively using Git and Github, setting up hardware within our project and of course how to use adobe premiere to edit videos...I feels like working in a group is pretty great, I can learn from different people, talk to them, asking questions when get confused.

Below are some docs for this project:

#Hardwares

* Point Grey Research Grasshopper3 camera
* Google Glass for training data 
    *   relative aperture: f/2.48  
    *   focal length: 2.95mm
    *   Videos - 720p

#Dependencies

{% highlight ruby %}
Flycapture2-SDK 
Opencv-2.4.8
boost-1.54.0.1ubuntu1
caffe 
ffmpeg-2.62
vlfeat-0.9.20
cmake/eclipse with cdt
{% endhighlight %}

#Usage

Preprocess
-----
* Videos to Images:Just a python script using ffmpeg to convert videos to frames
    
DeepsegmentsApp
------
* Training the Gaussian Mixture Model (classifying outputMaps from frames).
* Running the classifying application with auditory output for users.

FeatureExtractionApp
----
Application for extracting features based on output maps of convolutional neural network.

*  Sequential extraction: for this to run, we assume you have a root folder for all the video frames and each video has frames under its own folder(example: root_video_frames/zoo/1.jpg). We currently save outputMaps to binary to save storage.
*  Testing output for fc8 layer: we support sending an image to CNN with a prediction as output.
*  During sequential extraction you can stop the process anytime, just run the same command, it will restart from where it was left to folder level. 
*  This app assume working directory /home/user/projects/caffe and /home/user/projects/DeepSegments.



#Papers

Doshi, J., Mason, C., Wagner, A.R., Kira, Z., "Deep Segments: Comparisons between Scenes and their Constituent Fragments using Deep Learning". Georgia Tech technical report, GT-CS-14-07, 2014. [pdf](https://smartech.gatech.edu/bitstream/handle/1853/52410/Doshi_gtTechReport.pdf?sequence=1)

Doshi, J., Kira, Z., and Wagner, A.R., "From Deep Learning to Episodic Memories: Creating Categories of Visual Experiences", accepted to the Third Annual Conference on Advances in Cognitive Systems (ACS), 2015.[pdf](http://www.cogsys.org/papers/ACS2015/article15.pdf)









