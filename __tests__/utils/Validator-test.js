import Validator from '../../src/utils/Validator';

describe('Validator Test', () => {
  const {validateEmail, validatePassword} = Validator();

  it('valid email', () => {
    const result = validateEmail('test@mein-kochbuch.org');

    expect(result).toBe(undefined);
  });

  it('email missing name', () => {
    const result = validateEmail('@mein-kochbuch.org');

    expect(result).toBe('Email not valid!');
  });

  it('email missing @', () => {
    const result = validateEmail('testmein-kochbuch.org');

    expect(result).toBe('Email not valid!');
  });

  it('email missing domain', () => {
    const result = validateEmail('test@.org');

    expect(result).toBe('Email not valid!');
  });

  it('email missing .', () => {
    const result = validateEmail('test@mein-kochbuchorg');

    expect(result).toBe('Email not valid!');
  });

  it('email missing top level domain', () => {
    const result = validateEmail('test@mein-kochbuch.');

    expect(result).toBe('Email not valid!');
  });

  it('password valid', () => {
    const result = validatePassword('Test123!', 'Test123!');

    expect(result).toBe(undefined);
  });

  it('password do not match', () => {
    const result = validatePassword('Test123!', 'Test123!?');

    expect(result).toBe('Passwords do not match!');
  });

  it('password too short', () => {
    const password = 'Te1!';
    const result = validatePassword(password, password);

    expect(result).toBe('Password too short');
  });

  it('password too long', () => {
    const password =
      '123n?mWZXTmBE38!BS*%Shf4JY!YApTbL5&SPcssLaFGVX6p$e@R^H7b#J?_$Z5UVY*dPUkH?j$TR*x7-Ezv29KD%*WX+sYs+M$-H4a&wL!m$#tZmWy4B3L57Aqjznda$X$qW!G47C%J=3dnLgev#FCBzMt69pvsCYNw9+T#%skhrrsc5qJ_rV#EMDfE&MHYAc+YH9n?6B!4Hgd2bAGC2Kqv9Ck$^W@@F^AkU*$p@5SK*-DqBGuP4^r6HhZr@r%AWmpz!Y^DW?u&n_d@&KcTJUWP$*Lv9za9jrM@?4my_J@m$byxhFMAqVKZfpy!6m-#=L86%braM?UdUnTLZ-3LD@kxc&DXKJ=#NZPk%Lu^C27!8W*NV@X-YcxEt=4XkKjZzQAmB!xTRu!eCms53Mh3S%W69-J_9kHPk%#p3Py$jM-+ZdqDhETQ-TxpPRUSwz3T*Bt&pr&2frUS$YMS@D5HS=fX7zET65?qw%Q$7AevkWcGjMXeR2p^?c3pQ3@E+8yQ!p5TVh#D_BRA9b#qSQcqrMCvGt#d-b$!*f&&4x-a&&#Sht?jFZq26L&nvyPTZnBTMVj-2kEf6-pFmkCZnCdyz=n#cKEqt29BmFh8J@uS4-URq4rw!9^4sqq%Qv23cEph-#+SQy&Lb8uxn+BWZ5zQZmtREA3RPTt@PVeE8_C-vJFJ@g-sRPMHcV=gtYN562ZLxN3uXBHu?fjR9=fNBAAm_!%EFQXFwR*vm9Km-r_5wm?4Un+!3m$2#XBQ?Ngbrg-QR_n-3_K^--y-KM5ecM2k%R?+A$uP4qrmP&kyt&hnF%V-PFj$+4s5&SWzDL=PPcrm^na!AT3CP5*Eta3dkZ%-Qz!VELX&a*b9hNFcp=AmeR+Zp4UA2_2tVKxTNKd7A%e=qZKKb&jcD3#4%F$&^59ntZd3tn+JEgxsmBs*V9jwKh+WFpff&*62c4m6vYrLtjCWu?4!3T!J$BaU#T@@_%6v$kvYUP8z@jVtQE8t*eKx=qDXCxb^^2*!?m-Cy33UmA7A&2X';
    const result = validatePassword(password, password);

    expect(result).toBe('Password too long');
  });

  it('password no lower case', () => {
    const password = 'TEST123!';
    const result = validatePassword(password, password);

    expect(result).toBe('lowercase letter required');
  });

  it('password no upper case', () => {
    const password = 'test123!';
    const result = validatePassword(password, password);

    expect(result).toBe('uppercase letter required');
  });

  it('password no number', () => {
    const password = 'Testeinszweidrei!';
    const result = validatePassword(password, password);

    expect(result).toBe('number required');
  });

  it('password no special caracter', () => {
    const password = 'Test123Ausrufezeichen';
    const result = validatePassword(password, password);

    expect(result).toBe('special character required');
  });
});
