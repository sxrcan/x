const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

(function obfuscateFile() {
    try {
        const filePath = path.join(__dirname, 'inj.js');
        const outputPath = path.join(__dirname, 'injasdsaqf.js');

        const data = fs.readFileSync(filePath, 'utf-8');

        const obfuscationResult = JavaScriptObfuscator.obfuscate(data, {
            ignoreRequireImports: true,
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.5,
            deadCodeInjection: false,
            deadCodeInjectionThreshold: 0.01,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: true,
            identifierNamesGenerator: "hexadecimal",
            log: true,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayEncoding: ["base64"],
            stringArrayIndexShift: true,
            stringArrayRotate: false,
            stringArrayShuffle: false,
            stringArrayWrappersCount: 5,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 5,
            stringArrayWrappersType: "function",
            stringArrayThreshold: 1,
            transformObjectKeys: false,
            unicodeEscapeSequence: false
        });

        fs.writeFileSync(outputPath, obfuscationResult.getObfuscatedCode(), 'utf-8');
        console.log(`✅ Obfuscated code saved to ${outputPath}`);
    } catch (err) {
        console.error('❌ Error during obfuscation:', err);
    }
})();