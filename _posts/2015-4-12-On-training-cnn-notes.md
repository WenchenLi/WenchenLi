---
layout: post
category : machine learning
title: Thoughts on training CNN in the case of Super Resolution
---

Recently I have a project on learning Super Resolution filtering using Convolutional Neural Network(CNN). One thing surprises me is the fact that although numerical loss get stuck within a unit ball after 10000 iterations of batch size 717 of 20 by 20 images(output size), a fixed learning rate 0.0001 and momentum 0.9 still makes progress to learn the "super resolution filters". 

---

---
This makes me think the value of the loss should not be the only indicator to stop the training process or only numerical loss within a small fixed ball is not enough to indicate our machine stops learning, if we can have other variables tracking the learning process within the model like keep tracking the movement of the parameter in the space, maybe we can have a better understanding of the what's going on during training. 
---

---
To be honest, I give up a few times when trained this model because after 200000 iterations, the CNN still only learns the Gaussian filter in the first layer. This fact tells me two things: one is the real science behind this CNN still need to be discovered rigorously, the other is training deep neural networks really need patient even if numerical loss stuck within a range. 
---

---
I always want to relate training DNN with physics, I'll start another post on this when I'll free. But a little hint for me to remember for now is maybe we should see loss as a vector instead of scalar during training. 