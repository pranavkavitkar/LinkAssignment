Unzip the folder
Run 'npm i' in LinkAssignment folder 
Run npx cypress open , this will start cypress Dashboard, where single files can be testd.

Normal Cypress test : npm run cy:run
Run test parallely : npm run cy:parallel
Single test run : npx cypress run --spec cypress/e2e/{filename.spec.js} --headed (optional params)
