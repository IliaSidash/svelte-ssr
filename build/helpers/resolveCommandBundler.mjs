var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import colors from 'colors';
import displayCommandStep from './displayCommandStep';
import resolveBundlerByCode from './resolveBundlerByCode';
export default function resolveCommandBundler(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        displayCommandStep(cmd, colors.yellow(`Resolve bundler with code '${cmd.bundler}' from collection...`));
        if (!cmd.bundler) {
            throw new Error('Unable to resolve \'bundler\' option from the command');
        }
        return resolveBundlerByCode(cmd.bundler);
    });
}
