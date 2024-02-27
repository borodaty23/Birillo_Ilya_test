export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="51"
    height="41"
    fill="none"
    viewBox="0 0 51 41"
  >
    <defs>
      <pattern
        id="pattern_146_350"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use
          transform="matrix(.00357 0 0 .00444 .098 0)"
          xlinkHref="#image146_35_0"
        ></use>
      </pattern>
      <image
        id="image146_35_0"
        width="225"
        height="225"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAAA+s9J6AAAABHNCSVQICAgIfAhkiAAAEOZJREFUeJzt3c9uGtcXB/BzSfrbRbKqCFFiBWTLMbCMoigLP0UW9kskT5OnoIs+hRdN5LIzDMaYQcE2RmrNppvI8vktuDgD9R/+zMw95873I1VVo7a58fDlnHvnzlxDsDJmLhLRXvTXGo1G/fb2lm5ubsgYQ7u7u7SxsbHU/3c0GlGv1yNjDOVyOXr37t3BPf/aoTHmYo3hgxDG9QA0mA9bo9Go//jxg8rlMhUKBSdj6vf7dHl5SR8+fIgGFMFUCCG8x3zoOp1OfWdnx+GIFjMej+nk5ITev3+PYCqCEFrR4LXb7fru7q7jEcWj2WxSrVabhhKBFCjTIYwGbzgc1l21lmnpdru0vb2NQAqTuRBGgzcYDOqbm5uOR+RGGIZULpcRSAEyEcJo8Lrdbn17e9vxiGRptVpUrVYPCGF0wusQRsKXJ6Ivjocj3ng8po2NDVTHlHkZwmn4Wq1WvVqtuh6OVp+JaEQIIyyDmYvMvH9ycsIQj+PjY2bmfZ58sUECvKiE9gOyp+V+nkaYNyZHdQin4QuCoF6pVFwPJxOCIKBKpYIwxkhlCBE+ET4T0R8I4vrUhdAG8CNhtdO5wWBAm5ubqIpryrkewKLYLrp0u91zQgBFsBsd6q1W6xyLN6tTUQlR/dRAi7oC0ZVwWv3CMET10+FLs9k8R0VcjthKiOqn13A4pEKhgLnigkSGkJmLQRCcY+VTPbSnCxDVjk7bz36/jwD6Ae3pAsRUQrSf/hqNRpTP59GePkBECNF+Zgba03s4DyECmDkI4hync0JmLnY6HQQwW74EQYB5YoSTEE4XYAaDwTmeesieSqVCdpcNgkgO2lEswMBUp9OhnZ2dV1lvTVMNIQII8+wLpzIdxNRCiADCQ+wOm8wGMZUQIoDwFHsvMZNBTHxhBgGEReTzeer3+5lcrEljdXSPEEBYQKlUoizevkg0hMxcHAwG9SR/D/BLpVKhrO03TSyE0xvxWX3NPKyuVqsREX3MShATCSEzF1utFm7Ewzq+UEaCGPvqKPaC/td4PKZOp0O3t7dERMTMRESUy+Xufs0Yc/f3169fOzt8VCDv95rGGsKsr4QOBgO6uLig58+f09u3b1c+qHP6Ssforx0dHdVfvHhBvpybuKQDY8zvrgeRlLhDuE9EmVmIGY/HdHZ2Fg1cos/LzYfTp8NMH2NfrejtPcTYQsjMxTAMz8vlclz/S5HsfkcRJxdFQ9loNOpbW1u0sbHhajiJsm/+9jaIa7MLMXGfRSJGr9djnrxXU/S7Ndk+ndJsNh3+tBL1iQX//Fe1diVkj+eBkfPeVb2WgSMVcjwe1z2rjl7PD1fCk+rgFVvVRVe9RbGtjt+/f3f6M42L7UrUX5fYMHPx9PTU7VWJkU/hm8c2jPZDrJq9Tt5do6Xx5KJ+cns54mHnUF6Gbx77c932Xf8snWMP2tCrqyvmjIQvij1YwLm8vGTO2HWbwcxFD46k9nKlbRmsv0XN5jVk5e2M/QbNXPV7DOu+ptlrS1lxG3p8fMyM8N2LlQbRh0WapZ6isH/YfEJjSdrnWq2GHRcPsD+XP4jooNPpuB7OwuyDAntP/XveYIVV8Pr6mhnt51JY2Q4ou8Dm//Vl5qK21bTMr6CtgfW1p/4v0rCyKhiGIbPvFyVhrC+IKhdpFpoTMnOx3W6reUSp3W5TqVTC/G9NkXniZ9djWVCeff3iZUVV0IfVMmlYV0VUVw2frIQ8eV2FiioYhiGeOUuAsoroXzVkJVUwMytkDrGeiqiqGj5aCXmyIiq+Co7H48y+Qj1NyiqiH1hJFWRl33zaMXPR7j4SSdutqQcrIevZHfOZiA5dDyJLjDEXtVrt1XA4dD2Ue9nXRerfRcMKqqDdPKDmG883LPgzommV3OmZ9esYDodUrVYxD3TrkITODzXtKb03hKzg5nyhUDhAAN2aLtS0Wi3XQ/EPC24zLP/3CSrCQj8vWhZo1LWjg8GAyPOzCRQS2ZaqXaDhyZu0HX+HPQq3IwRioa880bRAc4eFthbMWA2VjuV+dkR/catqR6vVKhZjZBPZlko3E0JmLvb7famrorgpL5z9ghy5Hse8RqMh9TNNRP+thHulUsnJQBYwQhVUQVw13Nramu4AE0lFOxoEARGqoAoSq6E9EEfsKuldCHnych+RZbtSqWAuqMuh/eKEZbDQlS2VS8wg7vNkb5+I/ByJb0dRBdU6lLSdbWdnh0hoSyo6hN1ulwhzQZWMMRfVavXg6X8T7kL4559/ipsPbm9vowqC93JEk0UZ++gHQJxELdB8+/ZNXKEh+lkJ96Sda47bEvoZYy4qlYqYlvT169ci7xeKnRNiQcYbh/bJF+ekPlUhNoTgB2PMxWgk6t69ODkieYsy/X6fCK2oN96+fSumJZUox8zF3377zfU4ZpRKJbSikIijoyNRBYdoUgklb9oGPxyGYeh6DERE9PLlS3GLM5gTQuKMMRflcllES1oul4mELc6IC6H9xsR8EDJDXAj/+ecfwnwQskRcCLGSBlmTk7haBF46xP3C+4mrhOAnY8zF2dmZ62GIlLu5uXE9BsiIDx8+YKpxj9yzZ89cj+GObVewMgqJkjYFy9knjkXo9XpYGYXESev+cpIeYWJm10OADDDGuB7CDFELM7mcqOEApAKfesgcVMJHoBJCGhDCRyCEkAZpnzNZowFIgbQFQFEhvL29dT0EyABpnzOEEDIHlfARCCGkASEEgBk5SY+XFAoFce//AP+IWx3t9Xqux3BH4vs/wD/iQiitPwZ/STk7/t27d6Ieqco9f/7c9RggA5i5+OLFC9fDECknrTSDt/YkPTYnSQ4vVgJwS1wZlHqGHEBSxIXwzZs3uE0BmSIuhPZJf9ym8Aw6nIeJCyH4h5mL9h6wc+12m0jYy8RyRHTY7XZdj2OGtLdhwdr28vm86zEQEdG///4r7mViOWPMxd9//+16HDOkni0O+km8G5AjInr//r2ogdlvTcwLPcDMxVarhc7mEZgTQtL2qtWq6zGIJjaEYRjW0ZJCnAaDAZGwRRminyE8HA6HTgcyD09U6CetFR0MBuIWZWb89ddfLE2r1WJGNVSLmfcdf4Tm7bv+mdznrh2VuGpUqVSIUA3Bc2LnhKAbMxfDMBTTio7HYyKB80Gi2RAe2oGK0u12sUCj056UXTJEREEQyJ4PTkmcF1oie3m4HzMXT05OXH9m5on9DM20oxLnhUREQRCgGuqCB3iXoGJOiAUaPZi5GASBmLkgkez5INF/Q3gYBIGTgTyl1WqhGuqwZ780xdjY2DiQPB+cCaEx5qJSqYhsSe3WJ1RDwZi52O12RVVBDVS0o1PD4RDVUCh7XT5ub2+7HsoM6a0o0f0hPLQPPopTKBSIiD4iiCLtEdEX14OYd3Z2puPWxDyWt91ontjl5iziyR5R15+Jh4j/rKhqR6ewSCOOuMUYIrlPTSyEmYvNZtP1N9hTPjGC6BwzF6+vr11/Fh4ivgoSPVAJjTEX1WpV5CppxBfCaqlTPGlDz+0b8mBFj7Wjh/1+P7WBrGI0GqEtdcT+3D9KfWq+2WwSaW1Fo1j+Ag0fHx8zI4ipY/mfDRWtKNHTCzMin6yIqtVqRLhtkSpmLo5GI7E35cMwJPKhCk6x/G+8KSzUpIAnzwm6vtZPUVMFiZTeonjAF0JFTBQzF9vt9nmpVHI9lAepvi3xEJZ9I/Y+qIgJYOainX9Lp6oKLoz1tKRTCGKMWMkX8ffv35l9ve7MXOTJB1sTBDEGrKcCMiutggvNCe0G2FHCY4kb5ohr4skDuud2BVo0L+eC81hnNWRGRVwJMxd7vZ7jS7cUlVWQaInVUVsN/xiNtBVEVMRl8OTLdn80Gp1LelvaYySeOZgo1rdIw8zMQRAwT8aOMD6A9XY7aqvgSpi5eHp66vqHvg60p/dgXQswUdm8nqy0GkZk88Ldg237eXl56fiSLM8+QqX+OppV/iP7B/9IAl9nsKjBYECbm5sHRHSo8vUHa7LXcI+I8qT3Oh4YY353PYh1rbRtTfEizZ3NzU0ionqz2TznjM0VI1+iddIbQCDyoi2N8r5FZdt62kUq1Xw6Nm/dDdxiXxa8gi/j8XhaFb2qjGzD12q1zomovru763pIa3v27JnrIcRmpTlhFE9e+Hou7X2TMfhMk11CaueM9otkLwiCusQXMcXAiznh2iEkmrSlNJlf+EhVGPnnggt1Op26zwezhGFI5XL5lYbr8pi4Qqh+tfQp/X6fSqXS9OVXogIZDV6r1apLfe9LEoIgoEqlojqIsYSQ6OdmX0/bnhntdpt2d3ejb6NLPZTR4Hncbi7EXg+1QYwthER3rz5Qs+cwLvbbONFQRkPXaDTqv/76K2Xt5/wYzRUx1hASeT8/XMhwOKR+v0+//PLL2gevfvv2rU5E9ObNG8L7PR+nNYhJhND7+SHIpbE1jT2ERAgiuKUtiIm8bW26rY0my/sAqdrd3aUgCM61bLhI7JWH0yB6tKMGFKlUKmqCmEg7GsX20JAs3bsCOTS0pomHkGgSxE6nc+7z7g2QS3oQUwkhUXbvIYIMkm9fpBZCIgQR3JIaxFTPojDGXJTL5VedTifN3xaAiCaLNe12W9xiTeoHwhhjLnZ2dl7ZQxwBUiXx9kWq7WgUbuiDS5JaU2chJEIQwS0pq6ZOQ0iEIIJbEoLo/JBQbHEDlyTMEZ2HkGgmiAdYOYW0ud7i5rwdnYf2FFxx1ZqKqIRRaE/BFVetqbgQEs22p/bYK4BUuGhNxbWj89Ceggtp3kcUH0Kiny85CsOwjn2nMo3HYzo9PaVcLkdbW1tevA8nrTmiihBOoSrKMxqNKJ/Pz5xu5dPrL9OoiCLnhA+JzhWx91SEz/l8/pUx5vfoh9QYc1GpVF61Wi2XY4uF69sXok0POen1eskc+wMPsiciPXloDus9/fc/7ElWCOJ92Ibx6urK7VXKgDAMmZc8sYqZi81m0+3AY4IgPoERxsSsEr75a+NLEH06FzExrPgMdmnWDd/8dUEQM4ZtGE9PT91eMYXszyz2g1IZc8RsYhtGXy5+khZdcFn3eqAizlJ1n3AdHDnVCDf9f3Jx7iJ79C7aOO4jZiaEUdFADofDeqFQcDyidA2HQyoUCk4PPOVJRTyv1Wpp/9axWzeImQxhVDSQg8Ggvrm56XhEyYjsbCESctKwTxVRwhP6XmA7f2Tm/a9fv/L19bWj2cb6rq6u+OvXr8z2z8NCFxEYc0RUwsdwpEoeHR3VX758KfZ03DAMaTQa0fv370VVu0WwRxVxldYUIVxCNJREk2Orf/z4QVtbW5TP51MZw3g8piAI6H//+9/8KcBqQncf9miOuGxrihDGYD6c846Ojuo3Nzd3/2yMIWMMMfP0v6dcLnf31xNHbKsO22OyXhEBRGDMEQHcYwQRwD3GFjcA9xgVEcA9RhAB3GOPWlMEEdRijyoi5oigFnsURPvnQBBBH/YoiMz8iZmL2DED6rBHW9yI6AAhBJXYky1ujUYDe0dBLx+COBwOEULQzYcgIoSgnvYgIoTgBc1BRAjBGxqDGAQBQgh+UXj74rEHuAF0YiU39O1RDdg1A35iHUHcd/1zAkgUyw7iJ0YVhCxggY9BYfM2ZA4Lqoj2CwEBhOxhAUFEACHz2GFrigACWOygIiKAAHPSDCICCPCANIKIAAI8gROcIyKAAAviBCoiAgiwpDiDiAACrCiOICKAAGviNeaICCBATHjyYPBSAcReUICYMXORJ085LAJPQwAkwQZxn5n3wzCcSZ39533719oB/D84oCDabMDkqQAAAABJRU5ErkJggg=="
      ></image>
    </defs>
    <path fill="url(#pattern_146_350)" fillOpacity="1" d="M0 0H51V41H0z"></path>
  </svg>
);
