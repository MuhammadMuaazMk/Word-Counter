#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bold.red("\n\t" + "_".repeat(30)));
console.log(chalk.bold.cyanBright("\t\tWord Counter"));
console.log(chalk.bold.red("\t" + "_".repeat(30)));
console.log('\n');
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Message = "
    }
]);
//Trimming the sentence and splitting it into based on "spaces"
let words = answer.sentence.trim().split(" ");
console.log("_".repeat(60));
console.log(chalk.bold(". Split Sentence "));
console.log(words);
console.log("_".repeat(60));
console.log('\n\n');
console.log("=".repeat(60));
console.log(chalk.bold(`\t Total Word in a sentence = ${words.length}`));
console.log("=".repeat(60));
