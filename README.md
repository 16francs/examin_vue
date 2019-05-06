[![CircleCI](https://circleci.com/gh/16francs/examin_vue.svg?style=shield)](https://circleci.com/gh/16francs/examin_vue)
[![Coverage Status](https://coveralls.io/repos/github/16francs/examin_vue/badge.svg?branch=master)](https://coveralls.io/github/16francs/examin_vue?branch=master)
[![Join the chat at https://gitter.im/16francs/examin_vue](https://badges.gitter.im/16francs/examin_vue.svg)](https://gitter.im/16francs/examin_vue?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Examin (フロントエンド)

[インフラ関連: Docker](https://github.com/16francs/examin)     
[仕様書: API Blueprint](https://github.com/16francs/examin_blueprint)     
[フロントエンド: Nuxt.js](https://github.com/16francs/examin_vue)     
[バックエンド(今はこれ使ってる): Rails API](https://github.com/16francs/examin_rails)   

[バックエンド(以降予定): Golang API](https://github.com/16francs/examin_go)   
[バックエンド: SpringBoot API](https://github.com/16francs/examin_boot)

## 開発環境

* Node.js 11.12.0
* Nuxt.js 2.4.2

## 環境構築

* プロジェクトをクローンする

> $ git clone https://github.com/16francs/examin_vue.git  
> $ cd ./examin_vue

* 環境変数を設定するためのライブラリをインストール ( Mac の場合 )

> $ brew install direnv

* 環境変数の設定

> $ touch ./.envrc  
> $ echo "export BASE_URL='http://localhost:3000'" > ./.envrc  
> $ direnv allow

* コンテナをビルドする

> $ docker-compose -f ./docker/docker-compose.yml build

## 起動方法

* コンテナの起動

> $ docker-compose -f ./docker/docker-compose.yml up

* 下記のURLにアクセスして確認(フロントのポート番号はターミナルを確認)

> http://localhost:3000/examin
