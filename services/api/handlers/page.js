exports.post = function(request, reply) {
  request.server.methods.pages.create(
    [
      request.pre.project.id,
      request.payload.x,
      request.payload.y,
      JSON.stringify(request.payload.styles)
    ],
    function(err, result) {
      if ( err ) {
        return reply(err);
      }

      reply({
        status: 'created',
        page: result.rows[0]
      });
    }
  );
};

exports.get = {
  all: function(request, reply) {
    request.server.methods.pages.findAll(
      [
        request.pre.project.id
      ],
      function(err, result) {
        if ( err ) {
          return reply(err);
        }

        reply({
          status: 'success',
          pages: request.server.methods.utils.formatPages(result.rows)
        });
      }
    );
  },
  one: function(request, reply) {
    request.server.methods.pages.findOne(
      [
        request.params.page
      ],
      function(err, result) {
        if ( err ) {
          return reply(err);
        }

        reply({
          status: 'success',
          page: request.server.methods.utils.formatPage(result.rows)
        });
      }
    );
  }
};

exports.patch = function(request, reply) {
  request.server.methods.pages.update(
    [
      request.payload.x,
      request.payload.y,
      request.payload.styles,
      request.params.page
    ],
    function(err, result) {
      if ( err ) {
        return reply(err);
      }

      reply({
        status: 'updated',
        page: result.rows[0]
      });
    }
  );
};

exports.del = function(request, reply) {
  request.server.methods.pages.remove(
    [
      request.params.page
    ],
    function(err, result) {
      if ( err ) {
        return reply(err);
      }

      reply({
        status: 'deleted'
      });
    }
  );
};

exports.options = function(request, reply) {
  reply();
};
