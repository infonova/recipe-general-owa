# General Outlook Web Access

Franz recipe for general Outlook Web Access

## Installation

Due to dev status of recipe/plugin, install it like this:

* Clone repository to `~/.config/Franz/recipes/dev`
* Modify the `serviceURL` in `package.json`
* If you want to use it multiple times:
  * Rename it to something you like (`mv recipe-general-owa myown-owa`)
  * Change `id`, `name`, `serviceName`, etc., in `package.json`
* Reload or start Franz
* Click "Add Service" look under "dev" tag or search for the `serviceName`

## Roadmap

[] Make URL configurable
[] Automate installation