## Deployment to acceptance/production

1. cd to the app/ folder
2. run "meteor build ../output", this will create a file "app.tar.gz" in output/
3. transfer the app.tar.gz to the production server using something like SFTP
4. unpack the tarball by running "tar -xvf app.tar.gz"
5. stop the running forever command - if no other forever commands are running "forever stop 0" is fine.
   otherwise be cautious, due to a bug in forever this stops all running forever processes.
6. run "sh startup.sh" to startup the 360-viewer process again

## Development -> Acceptance -> Production

### Development

Development environments live on local environments only by running ``meteor`` locally.

### Acceptance

The acceptance environment is used to test new features.

http://360-acc.vensterworks.com

### Production

The production environment is used by clients and used for the showcase tours on our company website.

We only deploy tagged versions to the production environment.

http://360.vensterworks.com

