FROM python:3.11.3-alpine3.18
LABEL mantainer="ericarrudadias@gmail.com"

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

COPY ecommerceapp /ecommerceapp
COPY scripts /scripts

WORKDIR /ecommerceapp

EXPOSE 8000

RUN python -m venv /venv && \
  /venv/bin/pip install --upgrade pip && \
  /venv/bin/pip install -r /ecommerceapp/requirements.txt && \
  adduser --disabled-password --no-create-home duser && \
  mkdir -p /ecommerceapp/data/web/static && \
  mkdir -p /ecommerceapp/data/web/media && \
  chown -R duser:duser /venv && \
  chown -R duser:duser /ecommerceapp/data/web/static && \
  chown -R duser:duser /ecommerceapp/data/web/media && \
  chmod -R 755 /ecommerceapp/data/web/static && \
  chmod -R 755 /ecommerceapp/data/web/media && \
  chmod -R +x /scripts

ENV PATH="/scripts:/venv/bin:$PATH"

USER duser

CMD ["commands.sh"]