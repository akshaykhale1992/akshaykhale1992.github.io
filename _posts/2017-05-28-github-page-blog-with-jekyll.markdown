---
layout:     post
title:      "Github page with Jekyll"
subtitle:   "Getting started with github page blog using Jekyll"
date:       "2017-05-28 18:17:00"
author:     "Akshay Khale"
header-img: "img/hello-world-banner.jpg"
---

<h1>Getting started with a Github Page Blog using Jekyll</h1>

<p>I recently started research on <a href="https://jekyllrb.com/">Jekyll</a> for creating github page and fell in love with the simplicity and easy implementation.</p>
<p>I worked on <a href="https://wordpress.com/" target="_blank">Wordpress</a> and managing and maintaining a <a href="https://4androidfans.wordpress.com/"  target="_blank">blog</a> but for <a href="https://akshaykhale1992.github.io/" target="_blank">my githib page</a>, I was looking for a simple and easy to implement blogging platform without the hassle of different installations and then I found the perfect option.</p>
<p><a href="https://jekyllrb.com/"><b><i>Jekyll : Transform your plain text into static websites and blogs.</i></b></a></p>
<p>In this article I will be helping you to get started with Github Page blog using Jekyll, so let's get started...</p>
<h3>What is a <a href="https://pages.github.com/">Github Page</a>???</h3>
<p><a href="https://pages.github.com/">Github Pages</a> is a place to host a website free of cost but a website without database, which allows us to host only static HTML or Jekyll websites.</p>
<h3>Software Requirements</h3>
<p>To start creating a Jekyll Blog on Github pages you will need following tools.</p>
<p>
	<ul>
		<li>A simple text Editor (<a href="https://packages.ubuntu.com/trusty/gedit">GEdit</a> on Ubuntu, <a href="https://notepad-plus-plus.org/" target="_blank">Notepad++</a> for windows or <a href="https://macromates.com/" target="_blank">Textmate</a> for Mac).</li>
		<li><a href="https://git-scm.com/">Git</a> - A version control system.</li>
		<li><a href="https://jekyllrb.com/">Jekyll</a> - The Blogging Platform.</li>
	</ul>
</p>
<h3>Step 1 : Create a <a href="https://github.com/">Github</a> Account</h3>
<p>First you will need to create an Account on <a href="https://github.com/">Github</a> by chosing a Username.</p>
<p>Note: Your github page URL will be <i>&lt;your-username&gt;.github.io</i>.</p>
<p>Github is one of the most popular hosted <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control">Version Control System</a>. (If you are not familiar with the concept, it's perfectly fine).</p>
<h3>Setp 2 : Create a Repository</h3>
<p>A Repository is like a project on Github it's a term of <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control">Git - Version Control System</a>.</p>
<p>To create a repository just login with your github account and then click on <span class="glyphicon glyphicon-plus"></span> icon in top-right corner of your Github Account Page and them click on New repository.</p>
<p>On the next page, enter Repository Name as <i>&lt;your-username&gt;.github.io</i> and click on create repository (Note: Keep it public, you can add optional description also).</p>
<h3>Step 2 : Get the Code</h3>
<p>You don't get scandalized with the word code, everything is simple and easy, just stay with me.</p>
<p>After creating the repository just clone the repository.</p>
<p>For that just copy the Repository URL, it will be something like <i>https://github.com/&lt;your-username&gt;/&lt;your-username&gt;.github.io.git</i> and open Gitbash on windows or simply open terminal on your Linux and Mac and execute following command</p>
<code>git clone <i>https://github.com/&lt;your-username&gt;/&lt;your-username&gt;.github.io.git</i></code>
<p>After that go to <a href="https://github.com/akshaykhale1992/akshaykhale1992.github.io">https://github.com/akshaykhale1992/akshaykhale1992.github.io</a> and download it as Zip into your repository folder (Don't clone it, just download zip) and then extract it in the same folder and then you can delete the zip file.</p>
<h3>Step 3 : Start customizing</h3>
<p>After extracting you will have my github page on your system to run and test it you can open terminal/command prompt in your repository folder and issue following command.</p>
<code>jekyll serve --watch</code>
<p>To check the website you can visit <a href="http://localhost:4000/">http://localhost:4000/</a>, where you will see my blog homepage and all the posts of my blog.</p>
<p>The customization starts with <i>_config.xml</i>, just open the config.xml file and change the variables. <i>Eg. Change title with your blog title, right now it is Akshay Khale.</i> In the same way you will need to change all the variables, you can remove variables which are no applicable to you.</p>
<p>Note: The variable <i>google_tracking_id</i> is related to <a href="https://analytics.google.com/">Google Analytics</a> for analytics of your blog, you can generate one for your blog from <a href="https://analytics.google.com/">here</a>.</p>
<p>After changing <i>_config.xml</i> you will ned to restart the website, for that first enter Ctrl + C on terminal running the website and then again strt the server using <code>jekyll serve --watch</code>.</p>
<p>voila!!! Your website will all changes is up and running on your local system.</p>
<p>But all the posts are mine right now, for that just delete all the files from <i>_posts</i> folder, you can add your posts in the same folder.</p>
<h3>Step 4 : Create your first Post</h3>
<p>Since your blog is without any post, you are ready to create your first post, for that create a file in <i>_posts</i> folder with the extension <i>.markdown</i>.</p>
<p>Now in your first post add following code</p>
<pre>
---
layout:     post
title:      "Post Title"
subtitle:   "Post Subtitle"
date:       "2017-05-28 18:17:00"
author:     "Your Name"
header-img: "img/Post Header Image"
---
</pre>
<p>Just add the necessary details and you can add the blog header image in <i>img</i> folder, and add Markdown code to create your first post.</p>
<p><b><i>Markdown??? what the heck is that...</i></b></p>
<p>I know that's what you are thinking, markdown is a simple language which can add create Rich text for your website</p>
<p>Here is a simple <a href="http://www.markdowntutorial.com/">markdown tutorial</a>, you can use online Markdown editors like <a href="https://stackedit.io/">stackedit</a> or <a href="dillinger.io">Dillinger</a> where you can see the output right when you are typing.</p>
<h3>Step 5 : Let's Publish</h3>
<p>After the your post is ready and your site is fully customized you can push it online.</p>
<p>For that issue following git commands</p>
<code>
	git push origin master
</code>
<p>Above command will publish your website and you can check the website on your github page URL which is <i>&lt;your-username&gt;.github.io</i>.</p>
<p>If you face any issue setting up Jekyll github page, Please feel free to email me at <a href="mailto:khaleakshay@gmail.com">khaleakshay@gmail.com</a>.</p>
<h3>Whats next???</h3>
<p>For next time creating new post you can just create post file in <i>_posts</i> folder and push it using git push command</p>
<p>You add new images or change existing images by simply adding/changing those in <i>img</i> folder.</p>
<p>Didn't like my page theme, then you can get some cool themes from <a href="http://jekyllthemes.org/">here</a>.</p>
<p><i>Live Long and Prosper!!!</i></p>