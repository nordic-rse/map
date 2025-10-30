[![License](https://img.shields.io/badge/license-%20CC--BY--SA-blue.svg)](LICENSE)


# Research software engineers in the Nordics

This is data behind the community map at https://nordic-rse.org/.


## Documentation about the data format and fields

You can add yourself or your group to this map by sending a pull request changing the
[data file](data.yml).
The data is provided in [YAML format](https://en.wikipedia.org/wiki/YAML).


### Persons and groups

The data contains a list of `persons` and a list of `groups`.  Some people will
prefer to be listed individually but some will prefer to be represented only as
group. You can do either. There are also `places` (see below).

```yaml
persons:
  - name: John Doe
    homepage: https://example.org
    email: 'somebody@example.org'
    lat: 55.715043
    lon: 13.212401
  - name: Radovan Bast
    homepage: https://bast.fr
    twitter: __radovan
    github: bast
    gitlab: bast
    place: UiT
    skills: ['Python', 'Git', 'JavaScript', 'CMake', 'Rust', 'Fortran']

groups:
  - name: "Aalto RSE group"
    num_members: 10
    homepage: https://scicomp.aalto.fi
    twitter: SciCompAalto
    github: AaltoScienceIT
    place: Aalto
  - name: "NTNU Trondheim RSE Community"
    num_members: 10
    homepage: https://rse.org.ntnu.no
    place: NTNU

places:
  - name: UiT
    lat: 69.6798
    lon: 18.9710
  - name: Aalto
    lat: 60.178511
    lon: 24.833543
  - name: NTNU
    lat: 63.415865
    lon: 10.406666
```


### Required fields

The only required fields are `name` and place (either `lat` and `lon`, or
`place`).


### How to specify your location

You can either specify your coordinates explictly:

```yaml
persons:
  - name: John Doe
    lat: 63.415865
    lon: 10.406666
```

Alternatively you can use a placeholder:

```yaml
persons:
  - name: John Doe
    place: NTNU

places:
  - name: NTNU
    lat: 63.415865
    lon: 10.406666
```


### Optional fields

The fields `homepage`, `email`, `twitter`, `github`, `gitlab`,
`gitlab_instance`, `gitea`, `gitea_instance`, `mastodon`, `mastodon_instance`
`skills`, and `num_members` (only relevant for groups) are optional. If you
provide an email address, please place it between quotes.

```yaml
persons:
  - name: Radovan Bast
    homepage: https://bast.fr
    email: 'somebody@example.org'
    twitter: __radovan
    github: bast
    gitlab: bast
    place: UiT
    skills: ['Python', 'Git', 'JavaScript', 'CMake', 'Rust', 'Fortran']
```

You don't have to provide them if you prefer not to or if not relevant.


### Number of group members

Groups can optionally specify the number of members by setting `num_members`:

```yaml
groups:
  - name: "My RSE group"
    num_members: 15
    place: Oslo
```


### Skills

Persons can optionally list their skills if they want to be better discoverable
for projects and collaborations based on specific skills:

```yaml
persons:
  - name: John Doe
    lat: 55.715043
    lon: 13.212401
    skills: ['Python', 'Git', 'JavaScript', 'CMake', 'Rust', 'Fortran']
```

### Privacy

This map is a publication, and we are supporting your explicit choice to
express your professional information to the world.  By submitting to this map,
you are choosing that your data is made public without special privacy
protection. However the data itself is licensed under the [CC-BY-SA
license](https://creativecommons.org/licenses/by-sa/4.0/).  We publish your
information on your behalf until you request it be removed from the current
version, but we won't alter the Git history. We may contact you to keep things
up to date or let you know of events.
