REM navigate into the build output directory
cd app/build
REM if you are deploying to a custom domain
 echo 'sencoms.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:fgoraz/quiz.git master:gh-pages
cd ..