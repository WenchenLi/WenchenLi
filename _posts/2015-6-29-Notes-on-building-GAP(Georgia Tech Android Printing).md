---
layout: post
category : android
comments: true
title: GAP notes
---
This post keep track of what I realized and learned through building GAP.
Reason: No mobile printing service at gatech, only mac and windows officially supported,
\(I guess the reason is they think people using linux can figure it out themselves\).


I googled for the info, one I can think of for now is setup the server on android and add printers to the server,
and use terminal with busybox tool set (just lpr i guess) to print like on linux. But this comes with a lot of barriers and
of course is not the best way to do it.However, For now I should focus on how to make it run first. I should embed busybox into the
printing app and make an user interface for the command input later.Also I should make and implicit intent for other apps to launch printing.
Later if time allowed, I could do a auto connect to gatech network though their vpn for my user if they are not using gatech internet.
 \(gatech only allows sending print request from inland network\).
My approach: starting from a open source built CUPS services [app](https://github.com/pelya/android-print-plugin-cups). Since there is a server provided by this app through advanced setting. I could configure it with the gatech
  printer configuration.
