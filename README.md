# SA Parks

Public methods to public parks. A list of parks in South Australia, their features and facilities.

## Getting Started

### Installing

sa-parks is available on npm. Simply npm install it.

```
$ npm install --save sa-parks
```

To use in a browser add the following to your ```<head>``` tag
```html
<script src="https://unpkg.com/sa-parks@1.0.0/dist/index.umd.js"></script>
```

### Using
In node:
```javascript
import parks from ('sa-parks')
```

On the web:
```javascript
const parks = window.parks
```

#### all property
Contains all info on every park.
```
console.log(parks.all)
/*
[
    {
        name: "Fort Glanville Conservation Park",
        link: "http://www.environment.sa.gov.au/parks/Find_a_Park/Browse_by_region/Adelaide/Fort_Glanville_Conservation_Park",
        description: "Fort Glanville Conservation Park represents a significant period in South Australia's European colonial history. The fort was built in 1880 and has remained largely unaltered. The fort can be hired for a variety of uses including concerts and community activities. The parade ground and visitor centre (which has kitchen facilities) are also available for hire. On the third Sunday afternoon of every month, between September and May, witness the spectacle of a full historical re-enactment by Fort Glanville Association members. In full military costume they recreate the past with military drill demonstrations, including cannon firing.",
        location: {
            description: "Fort Glanville Conservation Park is located 12km north west of Adelaide. Access is via Military Road. Public transport to this park from Adelaide CBD is available. ",
            latitude: -34.851804,
            longitude: 138.478072
        },
        openingHours: "Every third Sunday of the month, from 1pm to 5pm between September and May.",
        nrmRegion: [
            "Adelaide and Mt Lofty Ranges"
        ],
        satcRegion: [
            "Adelaide"
        ],
        fireBanDistrict: [
            "Adelaide Metropolitan"
        ],
        facilities: [
            "Toilets",
            "Guided Tours",
            "Public Transport"
        ],
        experiences: [ ]
    },

...
]
```

#### names property
Returns a list of every park's name
```javascript
console.log(parks.names)
/*
    [
        "Morialta Conservation Park",
        ...
    ]
*/
```

#### random method
Returns one park at random.
```javascript
console.log(parks.random())
/*
    [
        "Morialta Conservation Park",
        ...
    ]
*/
```


## Contributing

This is a toy library for my own personal learning experiences. I'm not expecting or accepting any contributions at this time.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

The data upon which this project is sourced is licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Acknowledgments

* Data sourced from [data.sa.gov.au](https://data.sa.gov.au/data/dataset/919a3d26-e150-4282-8c30-2e090287b9b3/resource/4aec8622-c685-4484-bb83-18cda3f30959/download/cuserstdaleydocumentsparkslisting.json) January 22nd 2017.
* Thanks to [@kentcdodds](https://github.com/kentcdodds) for his [egghead.io] video series How to Write an Open Source JavaScript Library(https://egghead.io/courses/how-to-write-an-open-source-javascript-library) upon which most of the code and configuration in this repository is based.
