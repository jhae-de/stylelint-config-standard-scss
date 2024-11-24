import { ConfigVerifier } from '@jhae/stylelint-config-verifier';

new ConfigVerifier('index.yaml').verify('scss/function-color-channel', {
  name: 'Allow the use of deprecated color functions',
  code: `
    #color.alpha {
      content: color.alpha(#FFFF80);
      content: alpha(#FFFF80);
      content: opacity(#FFFF80);
    }
    
    #color.blackness {
      content: color.blackness(#808080);
      content: blackness(#808080);
    }
    
    #color.blue {
      content: color.blue(#808080);
      content: blue(#808080);
    }
    
    #color.green {
      content: color.green(#808080);
      content: green(#808080);
    }
    
    #color.hue {
      content: color.hue(#808080);
      content: hue(#808080);
    }
    
    #color.lightness {
      content: color.lightness(#808080);
      content: lightness(#808080);
    }
    
    #color.red {
      content: color.red(#808080);
      content: red(#808080);
    }
    
    #color.saturation {
      content: color.saturation(#808080);
      content: saturation(#808080);
    }
    
    #color.whiteness {
      content: color.whiteness(#808080);
    }
  `,
});
