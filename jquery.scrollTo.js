




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jquery.scrollTo/jquery.scrollTo.js at master · flesler/jquery.scrollTo · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="flesler/jquery.scrollTo" name="twitter:title" /><meta content="Contribute to jquery.scrollTo development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/38258?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/38258?s=400" property="og:image" /><meta content="flesler/jquery.scrollTo" property="og:title" /><meta content="https://github.com/flesler/jquery.scrollTo" property="og:url" /><meta content="Contribute to jquery.scrollTo development by creating an account on GitHub." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="62EDB69C:0141:1AA5267:5348E04D" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="jhG+UXfqBYSaWWn+1t8sCLAlgGalciEoxNOGWUy+MjA=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-9bb53a970698e77802f98db076a34f260ae63ee3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-24972a8594e0dd0863bc8eacfe2fb93cec3b854f.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-e74c47b047378bd1da6e54f064c49571a2b70565.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a1fec3e73d87f3550c635e371c8519308940f4b4.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="d214ff40e069409bc0fb6fc672847713">

        <link data-pjax-transient rel='permalink' href='/flesler/jquery.scrollTo/blob/cb88f0b9ca64d806957139df93934b2f3ff6417f/jquery.scrollTo.js'>

  <meta name="description" content="Contribute to jquery.scrollTo development by creating an account on GitHub." />

  <meta content="38258" name="octolytics-dimension-user_id" /><meta content="flesler" name="octolytics-dimension-user_login" /><meta content="4617120" name="octolytics-dimension-repository_id" /><meta content="flesler/jquery.scrollTo" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4617120" name="octolytics-dimension-repository_network_root_id" /><meta content="flesler/jquery.scrollTo" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/flesler/jquery.scrollTo/commits/master.atom" rel="alternate" title="Recent Commits to jquery.scrollTo:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fflesler%2Fjquery.scrollTo%2Fblob%2Fmaster%2Fjquery.scrollTo.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="flesler/jquery.scrollTo"
      data-branch="master"
      data-sha="118f4d78d841ad5e57e3ae8a3d4fe0a7423ce9ab"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="flesler/jquery.scrollTo" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fflesler%2Fjquery.scrollTo"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/flesler/jquery.scrollTo/stargazers">
      1,435
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fflesler%2Fjquery.scrollTo"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/flesler/jquery.scrollTo/network" class="social-count">
        580
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/flesler" class="url fn" itemprop="url" rel="author"><span itemprop="title">flesler</span></a></span><span class="path-divider">/</span><strong><a href="/flesler/jquery.scrollTo" class="js-current-repository js-repo-home-link">jquery.scrollTo</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/flesler/jquery.scrollTo" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /flesler/jquery.scrollTo">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/flesler/jquery.scrollTo/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /flesler/jquery.scrollTo/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>17</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/flesler/jquery.scrollTo/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /flesler/jquery.scrollTo/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/flesler/jquery.scrollTo/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /flesler/jquery.scrollTo/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/flesler/jquery.scrollTo/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /flesler/jquery.scrollTo/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/flesler/jquery.scrollTo/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /flesler/jquery.scrollTo/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/flesler/jquery.scrollTo.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flesler/jquery.scrollTo.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/flesler/jquery.scrollTo" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flesler/jquery.scrollTo" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save flesler/jquery.scrollTo to your computer and use it in GitHub Desktop." aria-label="Save flesler/jquery.scrollTo to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/flesler/jquery.scrollTo/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download flesler/jquery.scrollTo as a zip file"
                   title="Download flesler/jquery.scrollTo as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:3b29b95d77d13d775a9ac312a3775642 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/flesler/jquery.scrollTo/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/master/jquery.scrollTo.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.11/jquery.scrollTo.js"
                 data-name="1.4.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.11">1.4.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.10/jquery.scrollTo.js"
                 data-name="1.4.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.10">1.4.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.9/jquery.scrollTo.js"
                 data-name="1.4.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.9">1.4.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.8/jquery.scrollTo.js"
                 data-name="1.4.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.8">1.4.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.7/jquery.scrollTo.js"
                 data-name="1.4.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.7">1.4.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.6/jquery.scrollTo.js"
                 data-name="1.4.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.6">1.4.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.5/jquery.scrollTo.js"
                 data-name="1.4.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.5">1.4.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.4/jquery.scrollTo.js"
                 data-name="1.4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.4">1.4.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/tree/1.4.3/jquery.scrollTo.js"
                 data-name="1.4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.3">1.4.3</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/flesler/jquery.scrollTo" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.scrollTo</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.scrollTo.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.scrollTo.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Ariel Flesler" class="main-avatar js-avatar" data-user="38258" height="24" src="https://avatars1.githubusercontent.com/u/38258?s=140" width="24" />
    <span class="author"><a href="/flesler" rel="author">flesler</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-04-02T17:40:07-03:00" title="2014-04-02 16:40:07">April 02, 2014</time>
    <div class="commit-title">
        <a href="/flesler/jquery.scrollTo/commit/cb88f0b9ca64d806957139df93934b2f3ff6417f" class="message" data-pjax="true" title="Fixed #80">Fixed</a> <a href="https://github.com/flesler/jquery.scrollTo/issues/80" class="issue-link" title="Scroll to &lt;body&gt; tag">#80</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="flesler" href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js?author=flesler"><img alt="Ariel Flesler" class=" js-avatar" data-user="38258" height="20" src="https://avatars1.githubusercontent.com/u/38258?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="JeffreyATW" href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js?author=JeffreyATW"><img alt="Jeffrey Carl Faden" class=" js-avatar" data-user="266170" height="20" src="https://avatars3.githubusercontent.com/u/266170?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="szepeviktor" href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js?author=szepeviktor"><img alt="Szépe Viktor" class=" js-avatar" data-user="952007" height="20" src="https://avatars2.githubusercontent.com/u/952007?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Ariel Flesler" class=" js-avatar" data-user="38258" height="24" src="https://avatars1.githubusercontent.com/u/38258?s=140" width="24" />
            <a href="/flesler">flesler</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeffrey Carl Faden" class=" js-avatar" data-user="266170" height="24" src="https://avatars3.githubusercontent.com/u/266170?s=140" width="24" />
            <a href="/JeffreyATW">JeffreyATW</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Szépe Viktor" class=" js-avatar" data-user="952007" height="24" src="https://avatars2.githubusercontent.com/u/952007?s=140" width="24" />
            <a href="/szepeviktor">szepeviktor</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>187 lines (154 sloc)</span>
          <span class="meta-divider"></span>
        <span>5.375 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/flesler/jquery.scrollTo/raw/master/jquery.scrollTo.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/flesler/jquery.scrollTo/blame/master/jquery.scrollTo.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery.ScrollTo</span></div><div class='line' id='LC3'><span class="cm"> * Copyright (c) 2007-2014 Ariel Flesler - aflesler&lt;a&gt;gmail&lt;d&gt;com | http://flesler.blogspot.com</span></div><div class='line' id='LC4'><span class="cm"> * Licensed under MIT</span></div><div class='line' id='LC5'><span class="cm"> * http://flesler.blogspot.com/2007/10/jqueryscrollto.html</span></div><div class='line' id='LC6'><span class="cm"> * @projectDescription Easy element scrolling using jQuery.</span></div><div class='line' id='LC7'><span class="cm"> * @author Ariel Flesler</span></div><div class='line' id='LC8'><span class="cm"> * @version 1.4.12</span></div><div class='line' id='LC9'><span class="cm"> */</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">plugin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD Support</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">plugin</span><span class="p">);</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC18'><span class="p">}(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>	<span class="kd">var</span> <span class="nx">$scrollTo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">scrollTo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTo</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC22'>	<span class="p">};</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="nx">axis</span><span class="o">:</span><span class="s1">&#39;xy&#39;</span><span class="p">,</span></div><div class='line' id='LC26'>		<span class="nx">duration</span><span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mf">1.3</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC27'>		<span class="nx">limit</span><span class="o">:</span><span class="kc">true</span></div><div class='line' id='LC28'>	<span class="p">};</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>	<span class="c1">// Returns the element that needs to be animated to scroll the window.</span></div><div class='line' id='LC31'>	<span class="c1">// Kept for backwards compatibility (specially for localScroll &amp; serialScroll)</span></div><div class='line' id='LC32'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nb">window</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">scope</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">_scrollable</span><span class="p">();</span></div><div class='line' id='LC34'>	<span class="p">};</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>	<span class="c1">// Hack, hack, hack :)</span></div><div class='line' id='LC37'>	<span class="c1">// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)</span></div><div class='line' id='LC38'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">_scrollable</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC40'>			<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC41'>				<span class="nx">isWin</span> <span class="o">=</span> <span class="o">!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span> <span class="p">[</span><span class="s1">&#39;iframe&#39;</span><span class="p">,</span><span class="s1">&#39;#document&#39;</span><span class="p">,</span><span class="s1">&#39;html&#39;</span><span class="p">,</span><span class="s1">&#39;body&#39;</span><span class="p">]</span> <span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isWin</span><span class="p">)</span></div><div class='line' id='LC44'>					<span class="k">return</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>			<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">contentWindow</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">).</span><span class="nb">document</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>			<span class="k">return</span> <span class="sr">/webkit/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">)</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">compatMode</span> <span class="o">==</span> <span class="s1">&#39;BackCompat&#39;</span> <span class="o">?</span></div><div class='line' id='LC49'>				<span class="nx">doc</span><span class="p">.</span><span class="nx">body</span> <span class="o">:</span></div><div class='line' id='LC50'>				<span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC51'>		<span class="p">});</span></div><div class='line' id='LC52'>	<span class="p">};</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">scrollTo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">duration</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>			<span class="nx">settings</span> <span class="o">=</span> <span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC57'>			<span class="nx">duration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC58'>		<span class="p">}</span></div><div class='line' id='LC59'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">settings</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span></div><div class='line' id='LC60'>			<span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">onAfter</span><span class="o">:</span><span class="nx">settings</span> <span class="p">};</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>		<span class="k">if</span> <span class="p">(</span><span class="nx">target</span> <span class="o">==</span> <span class="s1">&#39;max&#39;</span><span class="p">)</span></div><div class='line' id='LC63'>			<span class="nx">target</span> <span class="o">=</span> <span class="mi">9</span><span class="nx">e9</span><span class="p">;</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>		<span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC66'>		<span class="c1">// Speed is still recognized for backwards compatibility</span></div><div class='line' id='LC67'>		<span class="nx">duration</span> <span class="o">=</span> <span class="nx">duration</span> <span class="o">||</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC68'>		<span class="c1">// Make sure the settings are given right</span></div><div class='line' id='LC69'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>		<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span><span class="p">)</span></div><div class='line' id='LC72'>			<span class="c1">// Let&#39;s keep the overall duration</span></div><div class='line' id='LC73'>			<span class="nx">duration</span> <span class="o">/=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC74'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span> <span class="p">);</span></div><div class='line' id='LC75'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">over</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">over</span> <span class="p">);</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_scrollable</span><span class="p">().</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC78'>			<span class="c1">// Null target yields nothing, just like jQuery does</span></div><div class='line' id='LC79'>			<span class="k">if</span> <span class="p">(</span><span class="nx">target</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>			<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC82'>				<span class="nx">$elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">),</span></div><div class='line' id='LC83'>				<span class="nx">targ</span> <span class="o">=</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">toff</span><span class="p">,</span> <span class="nx">attr</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC84'>				<span class="nx">win</span> <span class="o">=</span> <span class="nx">$elem</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">);</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>			<span class="k">switch</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">targ</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>				<span class="c1">// A number will pass the regex</span></div><div class='line' id='LC88'>				<span class="k">case</span> <span class="s1">&#39;number&#39;</span><span class="o">:</span></div><div class='line' id='LC89'>				<span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></div><div class='line' id='LC90'>					<span class="k">if</span> <span class="p">(</span><span class="sr">/^([+-]=?)?\d+(\.\d+)?(px|%)?$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">targ</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC91'>						<span class="nx">targ</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">targ</span> <span class="p">);</span></div><div class='line' id='LC92'>						<span class="c1">// We are done</span></div><div class='line' id='LC93'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC94'>					<span class="p">}</span></div><div class='line' id='LC95'>					<span class="c1">// Relative/Absolute selector, no break!</span></div><div class='line' id='LC96'>					<span class="nx">targ</span> <span class="o">=</span> <span class="nx">win</span> <span class="o">?</span> <span class="nx">$</span><span class="p">(</span><span class="nx">targ</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$</span><span class="p">(</span><span class="nx">targ</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC97'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">targ</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC98'>				<span class="k">case</span> <span class="s1">&#39;object&#39;</span><span class="o">:</span></div><div class='line' id='LC99'>					<span class="c1">// DOMElement / jQuery</span></div><div class='line' id='LC100'>					<span class="k">if</span> <span class="p">(</span><span class="nx">targ</span><span class="p">.</span><span class="nx">is</span> <span class="o">||</span> <span class="nx">targ</span><span class="p">.</span><span class="nx">style</span><span class="p">)</span></div><div class='line' id='LC101'>						<span class="c1">// Get the real position of the target</span></div><div class='line' id='LC102'>						<span class="nx">toff</span> <span class="o">=</span> <span class="p">(</span><span class="nx">targ</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">targ</span><span class="p">)).</span><span class="nx">offset</span><span class="p">();</span></div><div class='line' id='LC103'>			<span class="p">}</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>			<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">targ</span><span class="p">)</span> <span class="o">||</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">axis</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>				<span class="kd">var</span> <span class="nx">Pos</span>	<span class="o">=</span> <span class="nx">axis</span> <span class="o">==</span> <span class="s1">&#39;x&#39;</span> <span class="o">?</span> <span class="s1">&#39;Left&#39;</span> <span class="o">:</span> <span class="s1">&#39;Top&#39;</span><span class="p">,</span></div><div class='line' id='LC109'>					<span class="nx">pos</span> <span class="o">=</span> <span class="nx">Pos</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC110'>					<span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;scroll&#39;</span> <span class="o">+</span> <span class="nx">Pos</span><span class="p">,</span></div><div class='line' id='LC111'>					<span class="nx">old</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span></div><div class='line' id='LC112'>					<span class="nx">max</span> <span class="o">=</span> <span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">axis</span><span class="p">);</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>				<span class="k">if</span> <span class="p">(</span><span class="nx">toff</span><span class="p">)</span> <span class="p">{</span><span class="c1">// jQuery / DOMElement</span></div><div class='line' id='LC115'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">toff</span><span class="p">[</span><span class="nx">pos</span><span class="p">]</span> <span class="o">+</span> <span class="p">(</span> <span class="nx">win</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">old</span> <span class="o">-</span> <span class="nx">$elem</span><span class="p">.</span><span class="nx">offset</span><span class="p">()[</span><span class="nx">pos</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>					<span class="c1">// If it&#39;s a dom element, reduce the margin</span></div><div class='line' id='LC118'>					<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">margin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">-=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">targ</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;margin&#39;</span><span class="o">+</span><span class="nx">Pos</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC120'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">-=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">targ</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;border&#39;</span><span class="o">+</span><span class="nx">Pos</span><span class="o">+</span><span class="s1">&#39;Width&#39;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC121'>					<span class="p">}</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">offset</span><span class="p">[</span><span class="nx">pos</span><span class="p">]</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>					<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">pos</span><span class="p">])</span></div><div class='line' id='LC126'>						<span class="c1">// Scroll to a fraction of its width/height</span></div><div class='line' id='LC127'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">targ</span><span class="p">[</span><span class="nx">axis</span><span class="o">==</span><span class="s1">&#39;x&#39;</span><span class="o">?</span><span class="s1">&#39;width&#39;</span><span class="o">:</span><span class="s1">&#39;height&#39;</span><span class="p">]()</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span></div><div class='line' id='LC128'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC129'>					<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">targ</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span></div><div class='line' id='LC130'>					<span class="c1">// Handle percentage values</span></div><div class='line' id='LC131'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">slice</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;%&#39;</span> <span class="o">?</span></div><div class='line' id='LC132'>						<span class="nb">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">max</span></div><div class='line' id='LC133'>						<span class="o">:</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC134'>				<span class="p">}</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>				<span class="c1">// Number or &#39;number&#39;</span></div><div class='line' id='LC137'>				<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">limit</span> <span class="o">&amp;&amp;</span> <span class="sr">/^\d+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span></div><div class='line' id='LC138'>					<span class="c1">// Check the limits</span></div><div class='line' id='LC139'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">max</span> <span class="p">);</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>				<span class="c1">// Queueing axes</span></div><div class='line' id='LC142'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">i</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>					<span class="c1">// Don&#39;t waste time animating, if there&#39;s no need.</span></div><div class='line' id='LC144'>					<span class="k">if</span> <span class="p">(</span><span class="nx">old</span> <span class="o">!=</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span></div><div class='line' id='LC145'>						<span class="c1">// Intermediate animation</span></div><div class='line' id='LC146'>						<span class="nx">animate</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">onAfterFirst</span> <span class="p">);</span></div><div class='line' id='LC147'>					<span class="c1">// Don&#39;t animate this axis again in the next iteration.</span></div><div class='line' id='LC148'>					<span class="k">delete</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC149'>				<span class="p">}</span></div><div class='line' id='LC150'>			<span class="p">});</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>			<span class="nx">animate</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">onAfter</span> <span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>			<span class="kd">function</span> <span class="nx">animate</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>				<span class="nx">$elem</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">easing</span><span class="p">,</span> <span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC156'>					<span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">targ</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC157'>				<span class="p">});</span></div><div class='line' id='LC158'>			<span class="p">};</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>		<span class="p">}).</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC161'>	<span class="p">};</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>	<span class="c1">// Max scrolling position, works on quirks mode</span></div><div class='line' id='LC164'>	<span class="c1">// It only fails (not too badly) on IE, quirks mode.</span></div><div class='line' id='LC165'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">axis</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>		<span class="kd">var</span> <span class="nx">Dim</span> <span class="o">=</span> <span class="nx">axis</span> <span class="o">==</span> <span class="s1">&#39;x&#39;</span> <span class="o">?</span> <span class="s1">&#39;Width&#39;</span> <span class="o">:</span> <span class="s1">&#39;Height&#39;</span><span class="p">,</span></div><div class='line' id='LC167'>			<span class="nx">scroll</span> <span class="o">=</span> <span class="s1">&#39;scroll&#39;</span><span class="o">+</span><span class="nx">Dim</span><span class="p">;</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">))</span></div><div class='line' id='LC170'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">[</span><span class="nx">scroll</span><span class="p">]</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">)[</span><span class="nx">Dim</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]();</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>		<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="s1">&#39;client&#39;</span> <span class="o">+</span> <span class="nx">Dim</span><span class="p">,</span></div><div class='line' id='LC173'>			<span class="nx">html</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></div><div class='line' id='LC174'>			<span class="nx">body</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="nx">html</span><span class="p">[</span><span class="nx">scroll</span><span class="p">],</span> <span class="nx">body</span><span class="p">[</span><span class="nx">scroll</span><span class="p">]</span> <span class="p">)</span></div><div class='line' id='LC177'>			 <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nx">html</span><span class="p">[</span><span class="nx">size</span><span class="p">]</span>  <span class="p">,</span> <span class="nx">body</span><span class="p">[</span><span class="nx">size</span><span class="p">]</span>   <span class="p">);</span></div><div class='line' id='LC178'>	<span class="p">};</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>	<span class="kd">function</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">val</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">val</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">?</span> <span class="nx">val</span> <span class="o">:</span> <span class="p">{</span> <span class="nx">top</span><span class="o">:</span><span class="nx">val</span><span class="p">,</span> <span class="nx">left</span><span class="o">:</span><span class="nx">val</span> <span class="p">};</span></div><div class='line' id='LC182'>	<span class="p">};</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD requirement</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$scrollTo</span><span class="p">;</span></div><div class='line' id='LC186'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03493s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

