## Development -> Acceptance -> Production

### Development

Development environments live on local environments only. They can be booted by running ``meteor``.

### Acceptance

The acceptance environment is used to test new features. All new features should be tested in Acceptance before they get released to Production.

http://360-acc.vensterworks.com

### Production

The production environment is used by clients and used for the showcase tours on our company website.

We only deploy tagged versions to the production environment.

http://360.vensterworks.com

## How to deploy to acceptance/production

1. run "sh ./build.sh", this will remove all development 360-photos and create a file "app.tar.gz" in output/
2. transfer the app.tar.gz to the production server using something like SFTP
3. unpack the tarball by running "tar -xvf app.tar.gz"
4. stop the running forever command - if no other forever commands are running "forever stop 0" is fine.
   otherwise be cautious, due to a bug in forever this stops all running forever processes.
5. run "sh startup.sh" to startup the 360-viewer process again
