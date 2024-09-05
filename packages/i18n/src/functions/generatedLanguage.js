const fx = require('fs-extra');
const fs = require('fs');
const path = require('path');

const fileName = process.argv[2];

if (!fileName) {
    console.error('파일명을 입력해주세요.');
    process.exit(1); // 오류 발생 시 프로그램 종료
}

// 폴더 복사
async function generatedLanguage() {
    try {
        await fx.copy(`../locales/ko`, `../locales/${fileName}`);

        const baseDirectory = path.join(__dirname, '../locales');
        const directories = fs.readdirSync(baseDirectory);

        const indexFilePath = path.join(baseDirectory, 'index.ts');

        let exportStatements = [];

        directories.forEach((directory) => {
            const directoryPath = path.join(baseDirectory, directory);

            const stats = fs.statSync(directoryPath);
            if (stats.isDirectory()) {
                exportStatements.push(`export * from './${directory}';`);
            }
        });

        if (exportStatements.length > 0) {
            fs.writeFileSync(indexFilePath, exportStatements.join('\n'));
            console.log('폴더가 성공적으로 복사되었습니다.');
        }
    } catch (err) {
        console.error('폴더 복사 중 오류가 발생했습니다:', err);
    }
}
generatedLanguage();
