FROM python:3.11.3-alpine3.18
LABEL mantainer="ericarrudadias@gmail.com"

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

COPY backend /backend
COPY scripts /scripts

WORKDIR /backend

EXPOSE 8000

RUN python -m venv /venv && \
  /venv/bin/pip install --upgrade pip && \
  /venv/bin/pip install -r /backend/requirements.txt && \
  adduser --disabled-password --no-create-home duser && \
  mkdir -p /backend/data/web/static && \
  mkdir -p /backend/data/web/media && \
  chown -R duser:duser /venv && \
  chown -R duser:duser /backend/data/web/static && \
  chown -R duser:duser /backend/data/web/media && \
  chmod -R 755 /backend/data/web/static && \
  chmod -R 755 /backend/data/web/media && \
  chmod -R +x /scripts

ENV PATH="/scripts:/venv/bin:$PATH"

USER duser

CMD ["commands.sh"]