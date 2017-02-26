





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d876e21057f406b37686f3dc7b9666f5957cda4847a48ec11e040df065624617.css" integrity="sha256-2HbiEFf0BrN2hvPce5Zm9ZV82khHpI7BHgQN8GViRhc=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-05196ad2eeaad9504e7bb3adc33d4d19adc2bad851a35ed9b9b0f73702c554f5.css" integrity="sha256-BRlq0u6q2VBOe7Otwz1NGa3CuthRo17ZubD3NwLFVPU=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-dd6d43570c14503704e8983a7dd8e62484a668da1ce4ce997929ae2f367584c0.css" integrity="sha256-3W1DVwwUUDcE6Jg6fdjmJISmaNoc5M6ZeSmuLzZ1hMA=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>taffydb/taffy-min.js at master · typicaljoe/taffydb · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="C5F3:7517:1EA9C9C:32457C6:58B2441E" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C5F3:7517:1EA9C9C:32457C6:58B2441E" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MWQ5ODNhNmI5YzRmMzJmNDk5NmFhODA3ZWNlNjUzNDZiMDZjNzUwZWJhZjY2YTc1ZTllMTY3N2ViMTU3Y2I5M3x7InJlbW90ZV9hZGRyZXNzIjoiMTQ5LjEyNS4xNDIuMTUiLCJyZXF1ZXN0X2lkIjoiQzVGMzo3NTE3OjFFQTlDOUM6MzI0NTdDNjo1OEIyNDQxRSIsInRpbWVzdGFtcCI6MTQ4ODA3Nzg1OSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="8301148952b20fb92cda788d63531bc314b1b8af">

  <meta http-equiv="x-pjax-version" content="d315960581ecedf86906f3f215b9732a">
  

    
  <meta name="description" content="taffydb - TaffyDB - an open source JavaScript Database for your browser">
  <meta name="go-import" content="github.com/typicaljoe/taffydb git https://github.com/typicaljoe/taffydb.git">

  <meta content="77460" name="octolytics-dimension-user_id" /><meta content="typicaljoe" name="octolytics-dimension-user_login" /><meta content="184711" name="octolytics-dimension-repository_id" /><meta content="typicaljoe/taffydb" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="184711" name="octolytics-dimension-repository_network_root_id" /><meta content="typicaljoe/taffydb" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/typicaljoe/taffydb/commits/master.atom" rel="alternate" title="Recent Commits to taffydb:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/typicaljoe/taffydb/blob/master/taffy-min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production emoji-size-boost macintosh vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/personal" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source/stories /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business/why-github-for-work /business/security /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/typicaljoe/taffydb/search" class="js-site-search-form" data-scoped-search-url="/typicaljoe/taffydb/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold" href="/login?return_to=%2Ftypicaljoe%2Ftaffydb%2Fblob%2Fmaster%2Ftaffy-min.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ftypicaljoe%2Ftaffydb"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/typicaljoe/taffydb/watchers"
     aria-label="112 users are watching this repository">
    112
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftypicaljoe%2Ftaffydb"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/typicaljoe/taffydb/stargazers"
      aria-label="1563 users starred this repository">
      1,563
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftypicaljoe%2Ftaffydb"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/typicaljoe/taffydb/network" class="social-count"
       aria-label="240 users forked this repository">
      240
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/typicaljoe" class="url fn" rel="author">typicaljoe</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/typicaljoe/taffydb" data-pjax="#js-repo-pjax-container">taffydb</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/typicaljoe/taffydb" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /typicaljoe/taffydb" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/typicaljoe/taffydb/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /typicaljoe/taffydb/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">70</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/typicaljoe/taffydb/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /typicaljoe/taffydb/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">18</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/typicaljoe/taffydb/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /typicaljoe/taffydb/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/typicaljoe/taffydb/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /typicaljoe/taffydb/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/typicaljoe/taffydb/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /typicaljoe/taffydb/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/typicaljoe/taffydb/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /typicaljoe/taffydb/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/typicaljoe/taffydb/blob/c88fd85462f4aa495064f39c4dd7af3131304151/taffy-min.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a45757cdd9763d952d598760d1a7ce34 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/typicaljoe/taffydb/blob/master/taffy-min.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/typicaljoe/taffydb/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/typicaljoe/taffydb"><span>taffydb</span></a></span></span><span class="separator">/</span><strong class="final-path">taffy-min.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/typicaljoe/taffydb/commit/82964a34ac91022129471863ad684066f49a50be" data-pjax>
          82964a3
        </a>
        <relative-time datetime="2015-10-22T21:06:55Z">Oct 22, 2015</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" data-canonical-src="https://1.gravatar.com/avatar/1f4595c9544e13ca15ed78a22f89437c?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" height="20" src="https://camo.githubusercontent.com/fd84693b81b9522165456da3101f1e18b1799519/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f31663435393563393534346531336361313565643738613232663839343337633f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d7826733d313430" width="20" />
        <span class="user-mention">mmikowski</span>
          <a href="/typicaljoe/taffydb/commit/82964a34ac91022129471863ad684066f49a50be" class="message" data-pjax="true" title="Updated minified to latest source; passes regression tests">Updated minified to latest source; passes regression tests</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="typicaljoe" href="/typicaljoe/taffydb/commits/master/taffy-min.js?author=typicaljoe"><img alt="@typicaljoe" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/77460?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="snapadmin" href="/typicaljoe/taffydb/commits/master/taffy-min.js?author=snapadmin"><img alt="@snapadmin" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1084757?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@typicaljoe" height="24" src="https://avatars0.githubusercontent.com/u/77460?v=3&amp;s=48" width="24" />
            <a href="/typicaljoe">typicaljoe</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@snapadmin" height="24" src="https://avatars0.githubusercontent.com/u/1084757?v=3&amp;s=48" width="24" />
            <a href="/snapadmin">snapadmin</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/typicaljoe/taffydb/raw/master/taffy-min.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/typicaljoe/taffydb/blame/master/taffy-min.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/typicaljoe/taffydb/commits/master/taffy-min.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    19.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">var TAFFY,exports,T;!function(){&quot;use strict&quot;;var _t_,_e_,_n_,_r_,_i_,_s_,_u_,_o_,_c_,_a_,_l_,_f_,_h_,_T_,_g_,_F_,_p_,_d_,_A_,_v_,_y_,_m_,___,_x_;if(!TAFFY)for(_i_=&quot;2.7&quot;,_s_=1,_u_=&quot;000000&quot;,_o_=1e3,_c_={},_x_=function(_t_){var _e_=Array.prototype.slice.call(_t_);return _e_.sort()},_a_=function(_t_){return TAFFY.isArray(_t_)||TAFFY.isObject(_t_)?_t_:JSON.parse(_t_)},_A_=function(_t_,_e_){return _v_(_t_,function(_t_){return _e_.indexOf(_t_)&gt;=0})},_v_=function(_t_,_e_,_n_){var _r_=[];return null==_t_?_r_:Array.prototype.filter&amp;&amp;_t_.filter===Array.prototype.filter?_t_.filter(_e_,_n_):(_l_(_t_,function(_t_,_i_,_s_){_e_.call(_n_,_t_,_i_,_s_)&amp;&amp;(_r_[_r_.length]=_t_)}),_r_)},___=function(_t_){return&quot;[object RegExp]&quot;===Object.prototype.toString.call(_t_)},_m_=function(_t_){var _e_=T.isArray(_t_)?[]:T.isObject(_t_)?{}:null;if(null===_t_)return _t_;for(var _n_ in _t_)_e_[_n_]=___(_t_[_n_])?_t_[_n_].toString():T.isArray(_t_[_n_])||T.isObject(_t_[_n_])?_m_(_t_[_n_]):_t_[_n_];return _e_},_y_=function(_t_){var _e_=JSON.stringify(_t_);return null===_e_.match(/regex/)?_e_:JSON.stringify(_m_(_t_))},_l_=function(_t_,_e_,_n_){var _r_,_i_,_s_,_u_;if(_t_&amp;&amp;(T.isArray(_t_)&amp;&amp;1===_t_.length||!T.isArray(_t_)))_e_(T.isArray(_t_)?_t_[0]:_t_,0);else for(_s_=0,_t_=T.isArray(_t_)?_t_:[_t_],_u_=_t_.length;_u_&gt;_s_&amp;&amp;(_i_=_t_[_s_],T.isUndefined(_i_)&amp;&amp;!_n_||(_r_=_e_(_i_,_s_),_r_!==T.EXIT));_s_++);},_f_=function(_t_,_e_){var _n_,_r_,_i_=0;for(_r_ in _t_)if(_t_.hasOwnProperty(_r_)&amp;&amp;(_n_=_e_(_t_[_r_],_r_,_i_++),_n_===T.EXIT))break},_c_.extend=function(_t_,_e_){_c_[_t_]=function(){return _e_.apply(this,_x_(arguments))}},_h_=function(_t_){var _e_;return T.isString(_t_)&amp;&amp;/[t][0-9]*[r][0-9]*/i.test(_t_)?!0:T.isObject(_t_)&amp;&amp;_t_.___id&amp;&amp;_t_.___s?!0:T.isArray(_t_)?(_e_=!0,_l_(_t_,function(_t_){return _h_(_t_)?void 0:(_e_=!1,TAFFY.EXIT)}),_e_):!1},_g_=function(_t_,_e_){var _n_=!0;return _l_(_e_,function(_e_){switch(T.typeOf(_e_)){case&quot;function&quot;:if(!_e_.apply(_t_))return _n_=!1,TAFFY.EXIT;break;case&quot;array&quot;:_n_=1===_e_.length?_g_(_t_,_e_[0]):2===_e_.length?_g_(_t_,_e_[0])||_g_(_t_,_e_[1]):3===_e_.length?_g_(_t_,_e_[0])||_g_(_t_,_e_[1])||_g_(_t_,_e_[2]):4===_e_.length?_g_(_t_,_e_[0])||_g_(_t_,_e_[1])||_g_(_t_,_e_[2])||_g_(_t_,_e_[3]):!1,_e_.length&gt;4&amp;&amp;_l_(_e_,function(_e_){_g_(_t_,_e_)&amp;&amp;(_n_=!0)})}}),_n_},_T_=function(_t_){var _e_=[];return T.isString(_t_)&amp;&amp;/[t][0-9]*[r][0-9]*/i.test(_t_)&amp;&amp;(_t_={___id:_t_}),T.isArray(_t_)?(_l_(_t_,function(_t_){_e_.push(_T_(_t_))}),_t_=function(){var _t_=this,_n_=!1;return _l_(_e_,function(_e_){_g_(_t_,_e_)&amp;&amp;(_n_=!0)}),_n_}):T.isObject(_t_)?(T.isObject(_t_)&amp;&amp;_t_.___id&amp;&amp;_t_.___s&amp;&amp;(_t_={___id:_t_.___id}),_f_(_t_,function(_t_,_n_){T.isObject(_t_)||(_t_={is:_t_}),_f_(_t_,function(_t_,_r_){var _i_,_s_=[];_i_=&quot;hasAll&quot;===_r_?function(_t_,_e_){_e_(_t_)}:_l_,_i_(_t_,function(_t_){var _e_,_i_=!0;_e_=function(){var _e_,_s_=this[_n_],_u_=&quot;==&quot;,_o_=&quot;!=&quot;,_c_=&quot;===&quot;,_a_=&quot;&lt;&quot;,_l_=&quot;&gt;&quot;,_f_=&quot;&lt;=&quot;,_h_=&quot;&gt;=&quot;,_T_=&quot;!==&quot;;return&quot;undefined&quot;==typeof _s_?!1:(0===_r_.indexOf(&quot;!&quot;)&amp;&amp;_r_!==_o_&amp;&amp;_r_!==_T_&amp;&amp;(_i_=!1,_r_=_r_.substring(1,_r_.length)),_e_=&quot;regex&quot;===_r_?_t_.test(_s_):&quot;lt&quot;===_r_||_r_===_a_?_t_&gt;_s_:&quot;gt&quot;===_r_||_r_===_l_?_s_&gt;_t_:&quot;lte&quot;===_r_||_r_===_f_?_t_&gt;=_s_:&quot;gte&quot;===_r_||_r_===_h_?_s_&gt;=_t_:&quot;left&quot;===_r_?0===_s_.indexOf(_t_):&quot;leftnocase&quot;===_r_?0===_s_.toLowerCase().indexOf(_t_.toLowerCase()):&quot;right&quot;===_r_?_s_.substring(_s_.length-_t_.length)===_t_:&quot;rightnocase&quot;===_r_?_s_.toLowerCase().substring(_s_.length-_t_.length)===_t_.toLowerCase():&quot;like&quot;===_r_?_s_.indexOf(_t_)&gt;=0:&quot;likenocase&quot;===_r_?_s_.toLowerCase().indexOf(_t_.toLowerCase())&gt;=0:_r_===_c_||&quot;is&quot;===_r_?_s_===_t_:_r_===_u_?_s_==_t_:_r_===_T_?_s_!==_t_:_r_===_o_?_s_!=_t_:&quot;isnocase&quot;===_r_?_s_.toLowerCase?_s_.toLowerCase()===_t_.toLowerCase():_s_===_t_:&quot;has&quot;===_r_?T.has(_s_,_t_):&quot;hasall&quot;===_r_?T.hasAll(_s_,_t_):&quot;contains&quot;===_r_?TAFFY.isArray(_s_)&amp;&amp;_s_.indexOf(_t_)&gt;-1:-1!==_r_.indexOf(&quot;is&quot;)||TAFFY.isNull(_s_)||TAFFY.isUndefined(_s_)||TAFFY.isObject(_t_)||TAFFY.isArray(_t_)?T[_r_]&amp;&amp;T.isFunction(T[_r_])&amp;&amp;0===_r_.indexOf(&quot;is&quot;)?T[_r_](_s_)===_t_:T[_r_]&amp;&amp;T.isFunction(T[_r_])?T[_r_](_s_,_t_):!1:_t_===_s_[_r_],_e_=_e_&amp;&amp;!_i_?!1:_e_||_i_?_e_:!0)},_s_.push(_e_)}),_e_.push(1===_s_.length?_s_[0]:function(){var _t_=this,_e_=!1;return _l_(_s_,function(_n_){_n_.apply(_t_)&amp;&amp;(_e_=!0)}),_e_})})}),_t_=function(){var _t_=this,_n_=!0;return _n_=(1!==_e_.length||_e_[0].apply(_t_))&amp;&amp;(2!==_e_.length||_e_[0].apply(_t_)&amp;&amp;_e_[1].apply(_t_))&amp;&amp;(3!==_e_.length||_e_[0].apply(_t_)&amp;&amp;_e_[1].apply(_t_)&amp;&amp;_e_[2].apply(_t_))&amp;&amp;(4!==_e_.length||_e_[0].apply(_t_)&amp;&amp;_e_[1].apply(_t_)&amp;&amp;_e_[2].apply(_t_)&amp;&amp;_e_[3].apply(_t_))?!0:!1,_e_.length&gt;4&amp;&amp;_l_(_e_,function(_e_){_g_(_t_,_e_)||(_n_=!1)}),_n_}):T.isFunction(_t_)?_t_:void 0},_p_=function(_t_,_e_){var _n_=function(_t_,_n_){var _r_=0;return T.each(_e_,function(_e_){var _i_,_s_,_u_,_o_,_c_;if(_i_=_e_.split(&quot; &quot;),_s_=_i_[0],_u_=1===_i_.length?&quot;logical&quot;:_i_[1],&quot;logical&quot;===_u_)_o_=_F_(_t_[_s_]),_c_=_F_(_n_[_s_]),T.each(_o_.length&lt;=_c_.length?_o_:_c_,function(_t_,_e_){return _o_[_e_]&lt;_c_[_e_]?(_r_=-1,TAFFY.EXIT):_o_[_e_]&gt;_c_[_e_]?(_r_=1,TAFFY.EXIT):void 0});else if(&quot;logicaldesc&quot;===_u_)_o_=_F_(_t_[_s_]),_c_=_F_(_n_[_s_]),T.each(_o_.length&lt;=_c_.length?_o_:_c_,function(_t_,_e_){return _o_[_e_]&gt;_c_[_e_]?(_r_=-1,TAFFY.EXIT):_o_[_e_]&lt;_c_[_e_]?(_r_=1,TAFFY.EXIT):void 0});else{if(&quot;asec&quot;===_u_&amp;&amp;_t_[_s_]&lt;_n_[_s_])return _r_=-1,T.EXIT;if(&quot;asec&quot;===_u_&amp;&amp;_t_[_s_]&gt;_n_[_s_])return _r_=1,T.EXIT;if(&quot;desc&quot;===_u_&amp;&amp;_t_[_s_]&gt;_n_[_s_])return _r_=-1,T.EXIT;if(&quot;desc&quot;===_u_&amp;&amp;_t_[_s_]&lt;_n_[_s_])return _r_=1,T.EXIT}return 0===_r_&amp;&amp;&quot;logical&quot;===_u_&amp;&amp;_o_.length&lt;_c_.length?_r_=-1:0===_r_&amp;&amp;&quot;logical&quot;===_u_&amp;&amp;_o_.length&gt;_c_.length?_r_=1:0===_r_&amp;&amp;&quot;logicaldesc&quot;===_u_&amp;&amp;_o_.length&gt;_c_.length?_r_=-1:0===_r_&amp;&amp;&quot;logicaldesc&quot;===_u_&amp;&amp;_o_.length&lt;_c_.length&amp;&amp;(_r_=1),0!==_r_?T.EXIT:void 0}),_r_};return _t_&amp;&amp;_t_.push?_t_.sort(_n_):_t_},function(){var _t_={},_e_=0;_F_=function(_n_){return _e_&gt;_o_&amp;&amp;(_t_={},_e_=0),_t_[&quot;_&quot;+_n_]||function(){var _r_,_i_,_s_,_u_=String(_n_),_o_=[],_c_=&quot;_&quot;,_a_=&quot;&quot;;for(_r_=0,_i_=_u_.length;_i_&gt;_r_;_r_++)_s_=_u_.charCodeAt(_r_),_s_&gt;=48&amp;&amp;57&gt;=_s_||46===_s_?(&quot;n&quot;!==_a_&amp;&amp;(_a_=&quot;n&quot;,_o_.push(_c_.toLowerCase()),_c_=&quot;&quot;),_c_+=_u_.charAt(_r_)):(&quot;s&quot;!==_a_&amp;&amp;(_a_=&quot;s&quot;,_o_.push(parseFloat(_c_)),_c_=&quot;&quot;),_c_+=_u_.charAt(_r_));return _o_.push(&quot;n&quot;===_a_?parseFloat(_c_):_c_.toLowerCase()),_o_.shift(),_t_[&quot;_&quot;+_n_]=_o_,_e_++,_o_}()}}(),_d_=function(){this.context({results:this.getDBI().query(this.context())})},_c_.extend(&quot;filter&quot;,function(){var _t_=TAFFY.mergeObj(this.context(),{run:null}),_e_=[];return _l_(_t_.q,function(_t_){_e_.push(_t_)}),_t_.q=_e_,_l_(_x_(arguments),function(_e_){_t_.q.push(_T_(_e_)),_t_.filterRaw.push(_e_)}),this.getroot(_t_)}),_c_.extend(&quot;order&quot;,function(_t_){_t_=_t_.split(&quot;,&quot;);var _e_,_n_=[];return _l_(_t_,function(_t_){_n_.push(_t_.replace(/^\s*/,&quot;&quot;).replace(/\s*$/,&quot;&quot;))}),_e_=TAFFY.mergeObj(this.context(),{sort:null}),_e_.order=_n_,this.getroot(_e_)}),_c_.extend(&quot;limit&quot;,function(_t_){var _e_,_n_=TAFFY.mergeObj(this.context(),{});return _n_.limit=_t_,_n_.run&amp;&amp;_n_.sort&amp;&amp;(_e_=[],_l_(_n_.results,function(_n_,_r_){return _r_+1&gt;_t_?TAFFY.EXIT:void _e_.push(_n_)}),_n_.results=_e_),this.getroot(_n_)}),_c_.extend(&quot;start&quot;,function(_t_){var _e_,_n_=TAFFY.mergeObj(this.context(),{});return _n_.start=_t_,_n_.run&amp;&amp;_n_.sort&amp;&amp;!_n_.limit?(_e_=[],_l_(_n_.results,function(_n_,_r_){_r_+1&gt;_t_&amp;&amp;_e_.push(_n_)}),_n_.results=_e_):_n_=TAFFY.mergeObj(this.context(),{run:null,start:_t_}),this.getroot(_n_)}),_c_.extend(&quot;update&quot;,function(_t_,_e_,_n_){var _r_,_i_=!0,_s_={},_u_=_x_(arguments);return!TAFFY.isString(_t_)||2!==arguments.length&amp;&amp;3!==arguments.length?(_s_=_t_,2===_u_.length&amp;&amp;(_i_=_e_)):(_s_[_t_]=_e_,3===arguments.length&amp;&amp;(_i_=_n_)),_r_=this,_d_.call(this),_l_(this.context().results,function(_t_){var _e_=_s_;TAFFY.isFunction(_e_)?_e_=_e_.apply(TAFFY.mergeObj(_t_,{})):T.isFunction(_e_)&amp;&amp;(_e_=_e_(TAFFY.mergeObj(_t_,{}))),TAFFY.isObject(_e_)&amp;&amp;_r_.getDBI().update(_t_.___id,_e_,_i_)}),this.context().results.length&amp;&amp;this.context({run:null}),this}),_c_.extend(&quot;remove&quot;,function(_t_){var _e_=this,_n_=0;return _d_.call(this),_l_(this.context().results,function(_t_){_e_.getDBI().remove(_t_.___id),_n_++}),this.context().results.length&amp;&amp;(this.context({run:null}),_e_.getDBI().removeCommit(_t_)),_n_}),_c_.extend(&quot;count&quot;,function(){return _d_.call(this),this.context().results.length}),_c_.extend(&quot;callback&quot;,function(_t_,_e_){if(_t_){var _n_=this;setTimeout(function(){_d_.call(_n_),_t_.call(_n_.getroot(_n_.context()))},_e_||0)}return null}),_c_.extend(&quot;get&quot;,function(){return _d_.call(this),this.context().results}),_c_.extend(&quot;stringify&quot;,function(){return JSON.stringify(this.get())}),_c_.extend(&quot;first&quot;,function(){return _d_.call(this),this.context().results[0]||!1}),_c_.extend(&quot;last&quot;,function(){return _d_.call(this),this.context().results[this.context().results.length-1]||!1}),_c_.extend(&quot;sum&quot;,function(){var _t_=0,_e_=this;return _d_.call(_e_),_l_(_x_(arguments),function(_n_){_l_(_e_.context().results,function(_e_){_t_+=_e_[_n_]||0})}),_t_}),_c_.extend(&quot;min&quot;,function(_t_){var _e_=null;return _d_.call(this),_l_(this.context().results,function(_n_){(null===_e_||_n_[_t_]&lt;_e_)&amp;&amp;(_e_=_n_[_t_])}),_e_}),function(){var _t_=function(){var _t_,_e_,_n_;return _t_=function(_t_,_e_,_n_){var _r_,_i_,_s_;switch(2===_n_.length?(_r_=_t_[_n_[0]],_s_=&quot;===&quot;,_i_=_e_[_n_[1]]):(_r_=_t_[_n_[0]],_s_=_n_[1],_i_=_e_[_n_[2]]),_s_){case&quot;===&quot;:return _r_===_i_;case&quot;!==&quot;:return _r_!==_i_;case&quot;&lt;&quot;:return _i_&gt;_r_;case&quot;&gt;&quot;:return _r_&gt;_i_;case&quot;&lt;=&quot;:return _i_&gt;=_r_;case&quot;&gt;=&quot;:return _r_&gt;=_i_;case&quot;==&quot;:return _r_==_i_;case&quot;!=&quot;:return _r_!=_i_;default:throw String(_s_)+&quot; is not supported&quot;}},_e_=function(_t_,_e_){var _n_,_r_,_i_={};for(_n_ in _t_)_t_.hasOwnProperty(_n_)&amp;&amp;(_i_[_n_]=_t_[_n_]);for(_n_ in _e_)_e_.hasOwnProperty(_n_)&amp;&amp;&quot;___id&quot;!==_n_&amp;&amp;&quot;___s&quot;!==_n_&amp;&amp;(_r_=TAFFY.isUndefined(_i_[_n_])?&quot;&quot;:&quot;right_&quot;,_i_[_r_+String(_n_)]=_e_[_n_]);return _i_},_n_=function(_n_){var _r_,_i_,_s_=_x_(arguments),_u_=_s_.length,_o_=[];if(&quot;function&quot;!=typeof _n_.filter){if(!_n_.TAFFY)throw&quot;TAFFY DB or result not supplied&quot;;_r_=_n_()}else _r_=_n_;return this.context({results:this.getDBI().query(this.context())}),TAFFY.each(this.context().results,function(_n_){_r_.each(function(_r_){var _c_,_a_=!0;t:for(_i_=1;_u_&gt;_i_&amp;&amp;(_c_=_s_[_i_],_a_=&quot;function&quot;==typeof _c_?_c_(_n_,_r_):&quot;object&quot;==typeof _c_&amp;&amp;_c_.length?_t_(_n_,_r_,_c_):!1,_a_);_i_++);_a_&amp;&amp;_o_.push(_e_(_n_,_r_))})}),TAFFY(_o_)()}}();_c_.extend(&quot;join&quot;,_t_)}(),_c_.extend(&quot;max&quot;,function(_t_){var _e_=null;return _d_.call(this),_l_(this.context().results,function(_n_){(null===_e_||_n_[_t_]&gt;_e_)&amp;&amp;(_e_=_n_[_t_])}),_e_}),_c_.extend(&quot;select&quot;,function(){var _t_=[],_e_=_x_(arguments);return _d_.call(this),1===arguments.length?_l_(this.context().results,function(_n_){_t_.push(_n_[_e_[0]])}):_l_(this.context().results,function(_n_){var _r_=[];_l_(_e_,function(_t_){_r_.push(_n_[_t_])}),_t_.push(_r_)}),_t_}),_c_.extend(&quot;distinct&quot;,function(){var _t_=[],_e_=_x_(arguments);return _d_.call(this),1===arguments.length?_l_(this.context().results,function(_n_){var _r_=_n_[_e_[0]],_i_=!1;_l_(_t_,function(_t_){return _r_===_t_?(_i_=!0,TAFFY.EXIT):void 0}),_i_||_t_.push(_r_)}):_l_(this.context().results,function(_n_){var _r_=[],_i_=!1;_l_(_e_,function(_t_){_r_.push(_n_[_t_])}),_l_(_t_,function(_t_){var _n_=!0;return _l_(_e_,function(_e_,_i_){return _r_[_i_]!==_t_[_i_]?(_n_=!1,TAFFY.EXIT):void 0}),_n_?(_i_=!0,TAFFY.EXIT):void 0}),_i_||_t_.push(_r_)}),_t_}),_c_.extend(&quot;supplant&quot;,function(_t_,_e_){var _n_=[];return _d_.call(this),_l_(this.context().results,function(_e_){_n_.push(_t_.replace(/\{([^\{\}]*)\}/g,function(_t_,_n_){var _r_=_e_[_n_];return&quot;string&quot;==typeof _r_||&quot;number&quot;==typeof _r_?_r_:_t_}))}),_e_?_n_:_n_.join(&quot;&quot;)}),_c_.extend(&quot;each&quot;,function(_t_){return _d_.call(this),_l_(this.context().results,_t_),this}),_c_.extend(&quot;map&quot;,function(_t_){var _e_=[];return _d_.call(this),_l_(this.context().results,function(_n_){_e_.push(_t_(_n_))}),_e_}),T=function(_t_){var _e_,_n_,_r_,_i_=[],_o_={},_F_=1,_d_={template:!1,onInsert:!1,onUpdate:!1,onRemove:!1,onDBChange:!1,storageName:!1,forcePropertyCase:null,cacheSize:100,name:&quot;&quot;},_A_=new Date,_v_=0,_m_=0,___={};return _n_=function(_t_){var _e_=[],_r_=!1;return 0===_t_.length?_i_:(_l_(_t_,function(_t_){T.isString(_t_)&amp;&amp;/[t][0-9]*[r][0-9]*/i.test(_t_)&amp;&amp;_i_[_o_[_t_]]&amp;&amp;(_e_.push(_i_[_o_[_t_]]),_r_=!0),T.isObject(_t_)&amp;&amp;_t_.___id&amp;&amp;_t_.___s&amp;&amp;_i_[_o_[_t_.___id]]&amp;&amp;(_e_.push(_i_[_o_[_t_.___id]]),_r_=!0),T.isArray(_t_)&amp;&amp;_l_(_t_,function(_t_){_l_(_n_(_t_),function(_t_){_e_.push(_t_)})})}),_r_&amp;&amp;_e_.length&gt;1&amp;&amp;(_e_=[]),_e_)},_e_={dm:function(_t_){return _t_&amp;&amp;(_A_=_t_,___={},_v_=0,_m_=0),_d_.onDBChange&amp;&amp;setTimeout(function(){_d_.onDBChange.call(_i_)},0),_d_.storageName&amp;&amp;setTimeout(function(){localStorage.setItem(&quot;taffy_&quot;+_d_.storageName,JSON.stringify(_i_))}),_A_},insert:function(_t_,_n_){var _c_=[],_h_=[],_T_=_a_(_t_);return _l_(_T_,function(_t_,_r_){var _a_,_T_;return T.isArray(_t_)&amp;&amp;0===_r_?(_l_(_t_,function(_t_){_c_.push(&quot;lower&quot;===_d_.forcePropertyCase?_t_.toLowerCase():&quot;upper&quot;===_d_.forcePropertyCase?_t_.toUpperCase():_t_)}),!0):(T.isArray(_t_)?(_a_={},_l_(_t_,function(_t_,_e_){_a_[_c_[_e_]]=_t_}),_t_=_a_):T.isObject(_t_)&amp;&amp;_d_.forcePropertyCase&amp;&amp;(_T_={},_f_(_t_,function(_e_,_n_){_T_[&quot;lower&quot;===_d_.forcePropertyCase?_n_.toLowerCase():&quot;upper&quot;===_d_.forcePropertyCase?_n_.toUpperCase():_n_]=_t_[_n_]}),_t_=_T_),_F_++,_t_.___id=&quot;T&quot;+String(_u_+_s_).slice(-6)+&quot;R&quot;+String(_u_+_F_).slice(-6),_t_.___s=!0,_h_.push(_t_.___id),_d_.template&amp;&amp;(_t_=T.mergeObj(_d_.template,_t_)),_i_.push(_t_),_o_[_t_.___id]=_i_.length-1,_d_.onInsert&amp;&amp;(_n_||TAFFY.isUndefined(_n_))&amp;&amp;_d_.onInsert.call(_t_),void _e_.dm(new Date))}),_r_(_h_)},sort:function(_t_){return _i_=_p_(_i_,_t_.split(&quot;,&quot;)),_o_={},_l_(_i_,function(_t_,_e_){_o_[_t_.___id]=_e_}),_e_.dm(new Date),!0},update:function(_t_,_n_,_r_){var _s_,_u_,_c_,_a_,_l_={};_d_.forcePropertyCase&amp;&amp;(_f_(_n_,function(_t_,_e_){_l_[&quot;lower&quot;===_d_.forcePropertyCase?_e_.toLowerCase():&quot;upper&quot;===_d_.forcePropertyCase?_e_.toUpperCase():_e_]=_t_}),_n_=_l_),_s_=_i_[_o_[_t_]],_u_=T.mergeObj(_s_,_n_),_c_={},_a_=!1,_f_(_u_,function(_t_,_e_){(TAFFY.isUndefined(_s_[_e_])||_s_[_e_]!==_t_)&amp;&amp;(_c_[_e_]=_t_,_a_=!0)}),_a_&amp;&amp;(_d_.onUpdate&amp;&amp;(_r_||TAFFY.isUndefined(_r_))&amp;&amp;_d_.onUpdate.call(_u_,_i_[_o_[_t_]],_c_),_i_[_o_[_t_]]=_u_,_e_.dm(new Date))},remove:function(_t_){_i_[_o_[_t_]].___s=!1},removeCommit:function(_t_){var _n_;for(_n_=_i_.length-1;_n_&gt;-1;_n_--)_i_[_n_].___s||(_d_.onRemove&amp;&amp;(_t_||TAFFY.isUndefined(_t_))&amp;&amp;_d_.onRemove.call(_i_[_n_]),_o_[_i_[_n_].___id]=void 0,_i_.splice(_n_,1));_o_={},_l_(_i_,function(_t_,_e_){_o_[_t_.___id]=_e_}),_e_.dm(new Date)},query:function(_t_){var _r_,_s_,_u_,_o_,_c_,_a_;if(_d_.cacheSize&amp;&amp;(_s_=&quot;&quot;,_l_(_t_.filterRaw,function(_t_){return T.isFunction(_t_)?(_s_=&quot;nocache&quot;,TAFFY.EXIT):void 0}),&quot;&quot;===_s_&amp;&amp;(_s_=_y_(T.mergeObj(_t_,{q:!1,run:!1,sort:!1})))),!_t_.results||!_t_.run||_t_.run&amp;&amp;_e_.dm()&gt;_t_.run){if(_u_=[],_d_.cacheSize&amp;&amp;___[_s_])return ___[_s_].i=_v_++,___[_s_].results;0===_t_.q.length&amp;&amp;0===_t_.index.length?(_l_(_i_,function(_t_){_u_.push(_t_)}),_r_=_u_):(_o_=_n_(_t_.index),_l_(_o_,function(_e_){(0===_t_.q.length||_g_(_e_,_t_.q))&amp;&amp;_u_.push(_e_)}),_r_=_u_)}else _r_=_t_.results;return!(_t_.order.length&gt;0)||_t_.run&amp;&amp;_t_.sort||(_r_=_p_(_r_,_t_.order)),_r_.length&amp;&amp;(_t_.limit&amp;&amp;_t_.limit&lt;_r_.length||_t_.start)&amp;&amp;(_c_=[],_l_(_r_,function(_e_,_n_){if(!_t_.start||_t_.start&amp;&amp;_n_+1&gt;=_t_.start)if(_t_.limit){if(_a_=_t_.start?_n_+1-_t_.start:_n_,_a_&lt;_t_.limit)_c_.push(_e_);else if(_a_&gt;_t_.limit)return TAFFY.EXIT}else _c_.push(_e_)}),_r_=_c_),_d_.cacheSize&amp;&amp;&quot;nocache&quot;!==_s_&amp;&amp;(_m_++,setTimeout(function(){var _t_,_e_;_m_&gt;=2*_d_.cacheSize&amp;&amp;(_m_=0,_t_=_v_-_d_.cacheSize,_e_={},_f_(function(_n_,_r_){_n_.i&gt;=_t_&amp;&amp;(_e_[_r_]=_n_)}),___=_e_)},0),___[_s_]={i:_v_++,results:_r_}),_r_}},_r_=function(){var _t_,_n_;return _t_=TAFFY.mergeObj(TAFFY.mergeObj(_c_,{insert:void 0}),{getDBI:function(){return _e_},getroot:function(_t_){return _r_.call(_t_)},context:function(_t_){return _t_&amp;&amp;(_n_=TAFFY.mergeObj(_n_,_t_.hasOwnProperty(&quot;results&quot;)?TAFFY.mergeObj(_t_,{run:new Date,sort:new Date}):_t_)),_n_},extend:void 0}),_n_=this&amp;&amp;this.q?this:{limit:!1,start:!1,q:[],filterRaw:[],index:[],order:[],results:!1,run:null,sort:null,settings:_d_},_l_(_x_(arguments),function(_t_){_h_(_t_)?_n_.index.push(_t_):_n_.q.push(_T_(_t_)),_n_.filterRaw.push(_t_)}),_t_},_s_++,_t_&amp;&amp;_e_.insert(_t_),_r_.insert=_e_.insert,_r_.merge=function(_t_,_n_,_i_){var _s_={},_u_=[],_o_={};return _i_=_i_||!1,_n_=_n_||&quot;id&quot;,_l_(_t_,function(_t_){var _o_;_s_[_n_]=_t_[_n_],_u_.push(_t_[_n_]),_o_=_r_(_s_).first(),_o_?_e_.update(_o_.___id,_t_,_i_):_e_.insert(_t_,_i_)}),_o_[_n_]=_u_,_r_(_o_)},_r_.TAFFY=!0,_r_.sort=_e_.sort,_r_.settings=function(_t_){return _t_&amp;&amp;(_d_=TAFFY.mergeObj(_d_,_t_),_t_.template&amp;&amp;_r_().update(_t_.template)),_d_},_r_.store=function(_t_){var _e_,_n_=!1;return localStorage&amp;&amp;(_t_&amp;&amp;(_e_=localStorage.getItem(&quot;taffy_&quot;+_t_),_e_&amp;&amp;_e_.length&gt;0&amp;&amp;(_r_.insert(_e_),_n_=!0),_i_.length&gt;0&amp;&amp;setTimeout(function(){localStorage.setItem(&quot;taffy_&quot;+_d_.storageName,JSON.stringify(_i_))})),_r_.settings({storageName:_t_})),_r_},_r_},TAFFY=T,T.each=_l_,T.eachin=_f_,T.extend=_c_.extend,TAFFY.EXIT=&quot;TAFFYEXIT&quot;,TAFFY.mergeObj=function(_t_,_e_){var _n_={};return _f_(_t_,function(_e_,_r_){_n_[_r_]=_t_[_r_]}),_f_(_e_,function(_t_,_r_){_n_[_r_]=_e_[_r_]}),_n_},TAFFY.has=function(_t_,_e_){var _n_,_r_=!1;if(_t_.TAFFY)return _r_=_t_(_e_),_r_.length&gt;0?!0:!1;switch(T.typeOf(_t_)){case&quot;object&quot;:if(T.isObject(_e_))_f_(_e_,function(_n_,_i_){return _r_!==!0||T.isUndefined(_t_[_i_])||!_t_.hasOwnProperty(_i_)?(_r_=!1,TAFFY.EXIT):void(_r_=T.has(_t_[_i_],_e_[_i_]))});else if(T.isArray(_e_))_l_(_e_,function(_n_,_i_){return _r_=T.has(_t_,_e_[_i_]),_r_?TAFFY.EXIT:void 0});else if(T.isString(_e_))return TAFFY.isUndefined(_t_[_e_])?!1:!0;return _r_;case&quot;array&quot;:if(T.isObject(_e_))_l_(_t_,function(_n_,_i_){return _r_=T.has(_t_[_i_],_e_),_r_===!0?TAFFY.EXIT:void 0});else if(T.isArray(_e_))_l_(_e_,function(_n_,_i_){return _l_(_t_,function(_n_,_s_){return _r_=T.has(_t_[_s_],_e_[_i_]),_r_===!0?TAFFY.EXIT:void 0}),_r_===!0?TAFFY.EXIT:void 0});else if(T.isString(_e_)||T.isNumber(_e_))for(_r_=!1,_n_=0;_n_&lt;_t_.length;_n_++)if(_r_=T.has(_t_[_n_],_e_))return!0;return _r_;case&quot;string&quot;:if(T.isString(_e_)&amp;&amp;_e_===_t_)return!0;break;default:if(T.typeOf(_t_)===T.typeOf(_e_)&amp;&amp;_t_===_e_)return!0}return!1},TAFFY.hasAll=function(_t_,_e_){var _n_,_r_=TAFFY;return _r_.isArray(_e_)?(_n_=!0,_l_(_e_,function(_e_){return _n_=_r_.has(_t_,_e_),_n_===!1?TAFFY.EXIT:void 0}),_n_):_r_.has(_t_,_e_)},TAFFY.typeOf=function(_t_){var _e_=typeof _t_;return&quot;object&quot;===_e_&amp;&amp;(_t_?&quot;number&quot;!=typeof _t_.length||_t_.propertyIsEnumerable(&quot;length&quot;)||(_e_=&quot;array&quot;):_e_=&quot;null&quot;),_e_},TAFFY.getObjectKeys=function(_t_){var _e_=[];return _f_(_t_,function(_t_,_n_){_e_.push(_n_)}),_e_.sort(),_e_},TAFFY.isSameArray=function(_t_,_e_){return TAFFY.isArray(_t_)&amp;&amp;TAFFY.isArray(_e_)&amp;&amp;_t_.join(&quot;,&quot;)===_e_.join(&quot;,&quot;)?!0:!1},TAFFY.isSameObject=function(_t_,_e_){var _n_=TAFFY,_r_=!0;return _n_.isObject(_t_)&amp;&amp;_n_.isObject(_e_)&amp;&amp;_n_.isSameArray(_n_.getObjectKeys(_t_),_n_.getObjectKeys(_e_))?_f_(_t_,function(_i_,_s_){return _n_.isObject(_t_[_s_])&amp;&amp;_n_.isObject(_e_[_s_])&amp;&amp;_n_.isSameObject(_t_[_s_],_e_[_s_])||_n_.isArray(_t_[_s_])&amp;&amp;_n_.isArray(_e_[_s_])&amp;&amp;_n_.isSameArray(_t_[_s_],_e_[_s_])||_t_[_s_]===_e_[_s_]?void 0:(_r_=!1,TAFFY.EXIT)}):_r_=!1,_r_},_t_=[&quot;String&quot;,&quot;Number&quot;,&quot;Object&quot;,&quot;Array&quot;,&quot;Boolean&quot;,&quot;Null&quot;,&quot;Function&quot;,&quot;Undefined&quot;],_e_=function(_t_){return function(_e_){return TAFFY.typeOf(_e_)===_t_.toLowerCase()?!0:!1}},_n_=0;_n_&lt;_t_.length;_n_++)_r_=_t_[_n_],TAFFY[&quot;is&quot;+_r_]=_e_(_r_)}(),&quot;object&quot;==typeof exports&amp;&amp;(exports.taffy=TAFFY);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.06012s from github-fe163-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-yg11k+AvZvDgd+avAOJ3fbxOiSjWG4gHgTHpNE0GXzI=" src="https://assets-cdn.github.com/assets/github-ca0d7593e02f66f0e077e6af00e2777dbc4e8928d61b88078131e9344d065f32.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

