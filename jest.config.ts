import { InitialOptionsTsJest } from 'ts-jest/dist/types';

const jestConfig: InitialOptionsTsJest = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	collectCoverage: true,
};

export default jestConfig;
