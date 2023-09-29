FROM alpine:3.18.4 AS downloader

ARG TARGETOS
ARG TARGETARCH
ARG TARGETVARIANT
ARG VERSION=0.18.8

ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}${TARGETVARIANT}"

ADD https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip /tmp/pb.zip

RUN unzip /tmp/pb.zip -d /pb/


FROM alpine:3.18.4

RUN apk add --no-cache unzip ca-certificates

EXPOSE 8090

COPY --from=downloader /pb/pocketbase /pb/pocketbase

ENTRYPOINT [ "/pb/pocketbase", "serve", "--http=0.0.0.0:8090" ]
