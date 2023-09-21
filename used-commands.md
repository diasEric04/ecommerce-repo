## comandos utilizados (cronologicamente) durante a criação do projeto.
### lembrando que aparacerá apenas a primeira vez que o comando foi utilziado, por exemplo commitarei inúmeras vezes o projeto, mas apenas a primeira aparecerá aqui.

+ `eval "$(ssh-agent -s)"` -> inicializa o agent do ssh (windows precisa)
+ `ssh-add ~/.ssh/github` -> adiciona minha chave ssh na sessão do gitbash (para poder dar commit no meu github posteriormente)
+ `git init` -> inicializa um repositorio git vazio
+ `git remote add origin git@github.com:diasEric04/ecommerce-repo.git` -> adiciona o respositorio remoto ao repositorio no meu computador
+ `git clone https://github.com/diasEric04/rdw` -> clona o meu ""programa"" que assiste o projeto do react, e a cada
alteração, ele pergunta se deve buildar e ajustar no projeto do django (automaticamente)
+ `git add .` -> adiciono tudo para posteriormente dar o commit
+ `git commit -m "<mensagem...>"` -> dou commit nas "alterações" (na realidade é o primeiro commit)
+ `git push origin master` -> dou push nos arquivos, commitados anteriormente, para o github
+ `python -c "from secrets import SystemRandom as Sr; import string as s; print(''.join(Sr().choices(s.digits + s.punctuation + s.ascii_letters, k=60)))"` -> cria um chave de 60 caracteres, usada posteriormente no arquivo de configuração do django por .env
+ `python -m venv venv` -> cria um ambiente virtual do python (as libs instaladas estarão dentro do arquivo "backend/requirements.txt")
+ `. venv/Scripts/activate` -> ativa o ambiente virtual (linux seria: `. venv/bin/activate`)
+ `pip install Django psycopg2-binary pillow django-summernote` -> instalo as libs usadas no projeto
+ `docker-compose up --build` -> builda da imagens e containers do docker para rodar o projeto e o banco de dados postgresql
+ `npx crate-react-app frontend --template typescript` -> cria um projeto react com typescript