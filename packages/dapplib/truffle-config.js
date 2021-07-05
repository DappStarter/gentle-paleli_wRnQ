require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan return mad million hockey end army gas'; 
let testAccounts = [
"0xb97f58eff611679605c82104a22010a547381eae17d17ded4766a38d99f17205",
"0x14f55022f18a7bbe164e3fc7e6c3d70c7fc5f1b6cd4336a98335fa186f5dd3e5",
"0x9437510a1e02c7a4a1d4ed1f417e3eda41e20b1d003e14b62a268cdfdecdde04",
"0x9cd3831e87c799e44424a3115dec9629b88d868d959ecd222627108527ee2cfa",
"0x6b5cf4000badf830e9474f31af3c1834387ef3f2f42740ac8edc8805848a3bc5",
"0x464c3e82bb7c377b3cddc4d7258535056eabdc4af76e2aa0cbda5e05a9d5000a",
"0xac64461415fdea5a03dcb2d3e023aca299d6a488f683bb782b779509419985e2",
"0x5806c3af8be8c184e1424b90c0dcebe62c5432610d214a24c498cfd6050e0be2",
"0xe7bb19fcdf4d9c5018d80af9ad4565880194cdd3f6406891a9e9509fc26dd87a",
"0x957e9b7db30e6bff9486d45af73239bfccf4497f28920e58a5fe920412c9274f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

