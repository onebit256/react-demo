// add to Ipfs - this can be a string, a Buffer, a stream of Buffers, etc
// returns the hash
const IpfsHttpClient  = require('ipfs-http-client');
const { globSource } = IpfsHttpClient ;
// const IPFS = require('ipfs-core')

// const IPFS_URL = '/ip4/127.0.0.1/tcp/5001';

class IpfsService {
    
    constructor() {     
        // const gg =new URL(IPFS_URL);
        this.IpfsHttpClient = IpfsHttpClient({host: '', port:5001, protocol:'https'});        
        const p =0;
    }



    async  addToIpfs() {
        const { cids } = await this.IpfsHttpClient.add('Hello world!')
        return cids.hash;
    }

    // get from Ipfs
    // returns Blob
    async  getFromIpfs(ipfsNode, hash) {
        return new Blob([await ipfsNode.cat(hash)]);
    }
}

export default new IpfsService()