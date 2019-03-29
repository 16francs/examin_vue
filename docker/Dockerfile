# ビルドコンテナ
FROM node:11.12-alpine as builder

RUN npm install yarn

WORKDIR /examin_view

# 依存ライブラリのインストール
ADD package* ./
RUN yarn install

# プロジェクトの配置，build
ADD . ./
RUN yarn build

# プロダクションコンテナ
FROM node:11.12-alpine

WORKDIR /examin_view
ENV HOST=0.0.0.0

ADD package.json ./
ADD nuxt.config.js ./

COPY --from=builder ./examin_view/app ./app/
COPY --from=builder ./examin_view/node_modules ./node_modules/
COPY --from=builder ./examin_view/.nuxt ./.nuxt/

EXPOSE 3000
CMD ["yarn", "start"]
