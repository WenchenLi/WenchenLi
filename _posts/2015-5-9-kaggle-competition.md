---
layout: post
category : competition
title: kaggle otto competition
---
This week, me and my roommate participate in the kaggle competition. This [one](https://www.kaggle.com/c/otto-group-product-classification-challenge) is proposed by otto group and it is to predict the distribution of class_i given an item with 93 features. The visualization can be found [here](http://data-projector-visualizations.sourceforge.net/otto/).

<!--break-->

We start from using stacked auto-encoder and multilayer perceptron but the cross validation only reach around 80% correctness.

<!--break-->

Today,we adapt [Gradient Boosting Machine](http://en.wikipedia.org/wiki/Gradient_boosting)( one of the ensemble method), I hope this will squeeze a few percent of the correctness. It's still running. I'll keep posted.

