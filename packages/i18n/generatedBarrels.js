const fs = require('fs');
const path = require('path');

const generatedBarrels = () => {
    // 명령줄에서 파일명을 가져옴 (예: node script.js example.txt)
    const fileName = `${process.argv[2]}.json`;

    if (!fileName) {
        console.error('파일명을 입력해주세요.');
        process.exit(1); // 오류 발생 시 프로그램 종료
    }

    const contents = `{
    "name": ""
}`;

    // 기준 경로 설정
    const baseDirectory = path.join(__dirname, './src/locales');

    try {
        // 디렉토리 내의 파일 및 디렉토리 목록을 가져옴
        const directories = fs.readdirSync(baseDirectory);

        directories.forEach((directory) => {
            const directoryPath = path.join(baseDirectory, directory);
            const stats = fs.statSync(directoryPath);
            if (stats.isDirectory()) {
                // 디렉토리 내의 index.ts 경로 설정
                const indexFilePath = path.join(directoryPath, './index.ts');

                const newFilePath = path.join(directoryPath, fileName);
                fs.writeFileSync(newFilePath, contents);

                // 해당 디렉토리 내의 파일 목록 가져옴
                const filesInDirectory = fs.readdirSync(directoryPath);

                // index.ts 파일에 추가할 export 문 생성
                let exportStatements = [];
                let defaultArr = [];

                filesInDirectory.forEach((file) => {
                    const filePath = path.join(directoryPath, file);

                    // 파일이 TypeScript 파일인지 확인하고 export 문 추가
                    if (fs.statSync(filePath).isFile() && file !== 'index.ts' && file.endsWith('.json')) {
                        const defaultName = file.replace('.json', '');
                        exportStatements.push(`import { default as ${defaultName} } from './${file}';`);
                        defaultArr.push(defaultName);
                    }
                });

                const indexJsContents = `${exportStatements.join('\n')} \nexport default { ${defaultArr.join(', ')} };`;

                // 새로운 index.ts 파일에 export 문 작성
                if (exportStatements.length > 0) {
                    fs.writeFileSync(indexFilePath, indexJsContents);
                    console.log(`${directory} 내 새로운 index.ts 파일이 생성되었습니다.`);
                } else {
                    console.log(`${directory} 내에는 export할 파일이 없습니다.`);
                }
            }
        });
    } catch (err) {
        console.error('오류 발생:', err);
    }
};

generatedBarrels();
