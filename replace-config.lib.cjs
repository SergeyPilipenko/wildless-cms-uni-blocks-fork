module.exports = {
  files: ['lib/**/*.js', 'lib-mobile/**/*.js'],
  from: [
    /((import|export)\s+[^'";]*\s+from\s+['"](\.\/|(\.\.\/)+)[^'";]*)['"];/g,
    /(import\([`'"](\.\/|\.\.\/)+[^`'";]*)([`'";]*\))/g,
  ],
  to: ["$1.js';", '$1.js$3'],
  encoding: 'utf8',
};
