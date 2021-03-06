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
import resolveAvailablePort from './resolveAvailablePort';
import { DEFAULT_CLIENT_PORT, DEFAULT_LISTEN_PORT, DEFAULT_SERVER_PORT } from '../constants';
export default function resolveCommandPorts(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        displayCommandStep(cmd, colors.yellow('Resolve available server port to launch the tool...'));
        const nodePort = yield resolveAvailablePort(cmd.nodePort || DEFAULT_LISTEN_PORT);
        const clientPort = yield resolveAvailablePort(cmd.clientPort || DEFAULT_CLIENT_PORT);
        const serverPort = yield resolveAvailablePort(cmd.serverPort || DEFAULT_SERVER_PORT);
        return {
            node: nodePort.available,
            client: clientPort.available,
            server: serverPort.available,
        };
    });
}
